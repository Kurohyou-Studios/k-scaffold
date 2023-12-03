/**
 * Array of ranges of UTF-16 code units to skip when encoding nested row IDs.
 * Must contain arrays with the shape [start, end], describing the UTF-16 code unit range to skip.
 * Start is inclusive, end is exclusive. Comment each range with why it must be skipped.
 * This MUST be ordered !
 * @const @private
 * @type {number[][]}
 */
const _utf16SkippedRange = [
    // WARNING: Keep this ordered!
    // WARNING: Changing this is a **breaking change**: it affects the encoding and decoding
    //          between nested RowID and Roll20's flat RowID.
    [0, 48], // ASCII control characters
    // 48-57 are digits, keep them
    [58, 97], // Punctuation, upper-case letters etc..., cause problems in Roll20
    // 97-122 are lower-case letters, keep them
    [122, 128], // End of ASCII, contains coding character that are unsafe
    [0xD800, 0xDFFF], // UTF-16 surrogate pairs, only valid in pairs so must be skipped
];

/**
 * The length in UTF-16 code units of a flat Roll20 RowID, excluding the mandatory leading "-".
 * @const @private
 * @type {number}
 */
const _Roll20RowIDLength = 19;

/**
 * The character used as a placeholder when the nested level is not used (e.g. because we have the
 * nested RowID of a row that is at a higher level)
 * WARNING: This MUST be skipped in {@link _utf16SkippedRange} above.
 * @type {string}
 */
const _nestedLevelPlaceholderChar = '-';

/**
 * The character used as a placeholder when the nested level is not used (e.g. because we have the
 * nested RowID of a row that is at a higher level), as a UTF-16 code unit
 * @type {number}
 */
const _nestedLevelPlaceholderCodeUnit = _nestedLevelPlaceholderChar.charCodeAt(0);

/**
 * Convert a single element of a nested Row ID to an UTF-16 code unit.
 *
 * Null, undefined and negative values are converted to the code unit for the `-` character. This
 * is important: when using nested repeating section, one needs to differenciate between the
 * top-level row, and it's first subrow. Those cannot share the same Row ID. Thus, we need a
 * special marker for unused sublevels, which is `-`. Note that code unit is skipped in
 * {@link _utf16SkippedRange}.
 * @private
 * @param {number} value - The numeric value of the part to encode
 * @return {number}
 */
const _nestedRowIDPartToCodeUnit = function(value) {
    if (!Number.isFinite(value)) {
        throw new TypeError(
            `Parameter value has type number, got ${typeof value} object ${value}`,
        );
    }
    const initValue = value;
    if ((value == null) || (value < 0)) {
        return _nestedLevelPlaceholderCodeUnit;
    }
    for (const [start, end] of _utf16SkippedRange) {
        if (value >= start) {
            value += (end - start);
        }
    }
    // Check we have not overflowed, because the later call to String.fromCharCode won't check
    if (value > 0xFFFF) {
        throw new Error(
            `Cannot convert nested RowID part ${initValue} to a UTF-16 code unit: overflowed ` +
            'UTF-16 limit of 0xFFFF after skipping problematic code-unit ranges.',
        );
    }
    return value;
};

/**
 * Convert an UTF-16 code unit to a single element of a nested Row ID.
 *
 * The code unit for the "-" character, namely 45, is converted to -1. This is important: when
 * using nested repeating section, one needs to differenciate between the top-level row, and its
 * first subrow. Those cannot share the same Row ID. Thus, we need a special marker for unused
 * sublevels, which is null, undefined or a negative integer in the row ID.
 * @private
 * @param {number} value - The numeric value of the code unit to decode
 * @return {number}
 */
const _codeUnitToNestedRowIDPart = function(value) {
    if (value === _nestedLevelPlaceholderCodeUnit) {
        return -1;
    }
    for (const [start, end] of _utf16SkippedRange.toReversed()) {
        if (value >= end) {
            value -= (end - start);
        }
    }
    return value;
};

/**
 * Given a flat Roll20 RowID, returns the variable part of it, stripping any constant characters
 * mandate by the Roll20 engine. Currently, this strip the mandatory leading "-" if present, and
 * correclty leave "-" character belonging to the variable part
 * @param {string} rowID The row ID to extract the variable part from
 * @return {string}
 */
const getRowIDVariablePart = function(rowID) {
    if (!(typeof rowID === 'string' || rowID instanceof String)) {
        throw new TypeError(
            `Parameter rowID has type String, got ${typeof rowID} object ${rowID}`,
        );
    }
    const initRowID = rowID;
    // Drop leading "-". Be careful not to remove our placeholder here!
    if ((rowID.length === (_Roll20RowIDLength + 1)) && (rowID.startsWith('-'))) {
        rowID = rowID.slice(1);
    }
    if (rowID.length !== _Roll20RowIDLength) {
        throw new Error(
            `ValueError: Invalid Roll20 RowID '${initRowID}': must have length ` +
            `${_Roll20RowIDLength} (excluding the leading '-')`,
        );
    }
    return rowID;
};


/**
 * Add a nested row in a nested fieldset/nested repeating section and return its flat Roll20 RowID.
 *
 * The new row is nested inside the row that called this function (detected from the k-Scaffold
 * `trigger` object), or as a top-level row if this function is called from outside the repeating
 * section.
 * Note that it extracts data from a special `data` attribute of the trigger object, which is added
 * to the action button used to add rows inside the `+nestedFieldset` PUG mixin. This function will
 * fail if the appropriate data is not found, meaning you can only call it from an action button
 * that was properly configured. The additional data is:
 *   - `sectionName`: the name of the repeating section to add a nested row to
 *   - `selectorName`: the name of the attribute inside the repeating section that control the
 *                     display of nested rows, such that only the correct content is shown.
 *   - `levelQualname`: the fully-qualified name of the nested level to add, i.e. the concatenation
 *                      of all nested level down to the desired new level. This value is set into
 *                      the above selector attribute to control display
 * If you call this function from a context where the trigger object doesn't contain appropriate
 * `data`, you'll have to create this special object and attach it to the `trigger` before calling
 * this function.
 * @param {Object} obj An object that contains the `trigger`, `attributes` and `sections`
 *      objects of the k-scaffold cascade.
 * @return {string}
 */
const kAddNestedItem = function({trigger, attributes, sections}) {
    const section = trigger.data.sectionName;
    const selector = trigger.data.selectorName;
    const level = trigger.data.levelQualname;

    const rowid = _getRowIDFromTriggerName({name: trigger.name});
    const newChildID = _getNextAvailableNestedChildren(rowid, sections[`repeating_${section}`]);

    k.generateRowID(section, sections, newChildID);
    attributes[`repeating_${section}_${newChildID}_rowid`] = newChildID;
    attributes[`repeating_${section}_${newChildID}_${selector}`] = level;

    console.log(
        {event: 'kAddNestedItem', trigger, section, selector, level, sections, rowid, newChildID},
    );
    return newChildID;
};

/**
 * Delete a nested row and all sub-rows in a nested repeating section.
 *
 * This function wraps {@link k.removeRepeatingRow} and properly deletes all sub-rows when deleting
 * a row in a nested repeating section. Note that it needs additionnal information in the `data`
 * attribute of the passed `trigger`. That information is usually added by {@link nestedFieldset}.
 * If the trigger doesn't come from {@link nestedFieldset} (e.g. because you are calling this
 * function from outside the repeating section), you'll need to add the following properties to the
 * passed `trigger` object (dots in the names means nested objects):
 *   - `data.sectionName`: the name of the repeating section in which to delete the row
 *   - `sourceAttribute`: the full name of the row to delete, with the full prefix, e.g.
 *     `repeating_${sectionName}_${rowid}`. When clicking the delete button of a repeating section
 *     row, this is automatically added.
 *
 * @param {Object} obj - An object with k-scaffold's `trigger`, `attributes` and `sections` objects
 *      of the attribute cascade. The `trigger` object must contain the information detailed above.
 */
const kDeleteNestedItem = function({trigger, attributes, sections}) {
    console.log(trigger);
    const section = trigger.data.sectionName;
    const sectionRowIds = sections[`repeating_${section}`];
    const rowid = _getRowIDFromTriggerName({name: trigger.sourceAttribute, allowDefault: false});

    // Find the prefix for the rowId, skipping the mandatory leading "-"
    const placeholderIndex = rowid.indexOf(_nestedLevelPlaceholderChar, 1);
    const prefix = rowid.slice(0, placeholderIndex);

    // Filter the section RowIds to find only children of the rowId
    const regex = new RegExp(`^${prefix}`);
    const childrenRowIds = sectionRowIds.filter((id) => regex.test(id));

    // Delete all children
    childrenRowIds.forEach(
        (element) => {
            k.removeRepeatingRow(`repeating_${section}_${element}`, attributes, sections);
        },
    );

    console.log({
        event: 'kDeleteNestedItem',
        trigger, section, rowid, placeholderIndex, prefix, sectionRowIds, childrenRowIds,
    });
};

k.registerFuncs({kAddNestedItem, kDeleteNestedItem});


/**
 * Extract the RowID from a trigger name
 * @param {string} name - The name to extract a RowID from
 * @param {boolean} allowDefault - If the passed name is not the name of a repeating attribute,
 *  allow returning the default value that represent the top-level nested repeating row.
 * @return {string}
 */
const _getRowIDFromTriggerName = function({name, allowDefault=true}) {
    let rowid;
    let matches;
    if (name.startsWith('repeating')) {
        matches = (name.match(/^repeating_[^_]+_([^_]+)(_.+)?$/) || []);
        const [match] = matches.slice(1);
        rowid = match;
    } else {
        // The sheetworker was called from a top-level action button, outside the repeating
        // section
        matches = null;
        if (!allowDefault) {
            const msg = `ERROR: Trigger name ${name} is not contained in a repeating section.`;
            k.log(msg);
            throw new Error(msg);
        }
        rowid = '-'.concat(_nestedLevelPlaceholderChar.repeat(_Roll20RowIDLength));
    }
    console.log({event: '_getRowIDFromTriggerName', name, matches, rowid});
    return rowid;
};


/**
 * Generate the next available children's RowID
 * @param {String} rowId The rowId to get the next children of
 * @param {String[]} sectionRowIds All the rowIds in the repeating section
 * @return {String[]}
 */
const _getNextAvailableNestedChildren = function(rowId, sectionRowIds) {
    rowId = getRowIDVariablePart(rowId);
    // Find the prefix for the rowId
    const placeholderIndex = rowId.indexOf(_nestedLevelPlaceholderChar);
    const prefix = rowId.slice(0, placeholderIndex);

    // Filter the section RowIds to find only children of the rowId
    const regex = new RegExp(`^\-${prefix}`);
    const childrenRowIds = sectionRowIds.filter((id) => regex.test(id));

    // Since we encode 1 level per character, we can easily decode all the children id
    const childrenCharCodes = childrenRowIds
        .map((id) => getRowIDVariablePart(id).charCodeAt(placeholderIndex));
    const childrenIds = childrenCharCodes
        .map((codeUnit) => _codeUnitToNestedRowIDPart(codeUnit));

    // NOTE: we add a 0 for when there are no children
    // NOTE: the placeholder character is decoded to -1, so if no children exist, this still works
    const newPart = Math.max(-1, ...childrenIds) + 1;
    const newCodeUnit = _nestedRowIDPartToCodeUnit(newPart);
    const newChar = String.fromCharCode(newCodeUnit);
    const suffix = _nestedLevelPlaceholderChar.repeat(_Roll20RowIDLength - prefix.length - 1);
    const newId = `-${prefix}${newChar}${suffix}`;
    console.log({
        event: '_getNextAvailableNestedChildren',
        rowId,
        placeholderIndex,
        prefix,
        childrenRowIds,
        childrenCharCodes,
        childrenIds,
        newPart,
        newCodeUnit,
        newChar,
        suffix,
        newId,
        length: newId.length,
    });
    return newId;
};

/**
 * Encode a nested RowID to a flat Roll20 Row ID for the standard repeating section underlying a
 * nested repeating section.
 *
 * @param {number[]} nestedRowID - Nested RowID to encode to a flat Roll20 RowID. Must not be too
 *      deep (i.e. the array must not be too long), else the encoding will fail from lack of space
 *      on the Roll20 side.
 * @return {String}
 */
const encodeNestedRowID = function(nestedRowID) {
    if (nestedRowID.length > _Roll20RowIDLength) {
        throw new Error(
            'Nested RowID only support up to 19-level depth, because Roll20 RowID are ' +
            `${_Roll20RowIDLength} characters wide. Got a nested RowID with depth ` +
            `${nestedRowID.length}`,
        );
    }
    const suffix = String.fromCharCode(...nestedRowID.map(_nestedRowIDPartToCodeUnit));
    const paddedID = suffix.padStart(_Roll20RowIDLength, _nestedLevelPlaceholderCodeUnit);
    return '-' + paddedID; // Add the mandatory leading "-"
};

/**
 * Decode a Roll20 flat RowID from the standard repeating section underlying a nested repeating
 * section to a nested RowID of the nested section.
 *
 * @param {String} rowID - The Roll20 flat RowID to decode. May omit the mandatory leading "-".
 * @return {number[]}
 */
const decodeNestedRowID = function(rowID) {
    if (!(typeof rowID === 'string' || rowID instanceof String)) {
        throw new TypeError(
            `Parameter rowID has type String, got ${typeof rowID} object ${rowID}`,
        );
    }
    const initRowID = rowID;
    // Drop leading "-". Be careful not to remove our placeholder here!
    if ((rowID.startsWith('-')) && (rowID.length === (_Roll20RowIDLength + 1))) {
        rowID = rowID.slice(1);
    }
    if (rowID.length !== _Roll20RowIDLength) {
        throw new Error(
            `ValueError: Invalid Roll20 RowID '${initRowID}': must have length ` +
            `${_Roll20RowIDLength} (excluding the leading '-')`,
        );
    }
    // Now remove our placeholders. That way, if we change the placeholder this code still works
    // TODO: escape the character here, it might be special
    const startRegex = `^${_nestedLevelPlaceholderChar}+`;
    rowID = rowID.replace(new RegExp(startRegex, 'g'), '');
    return [...rowID].map((c) => c.charCodeAt(0)).map(_codeUnitToNestedRowIDPart);
};
