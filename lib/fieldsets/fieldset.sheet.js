/* ====================================================
 * Public API: sheetworker helpers exported to the user
 * ====================================================
 */


/**
 * Add a nested row in a nested repeating section and return its flat Roll20 RowID.
 *
 * @param {string} rowName The name of the row in which to create a sub-row, in the Roll20 format,
 *      i.e. `repeating_<section>_<rowID>`. Use `repeatin_<section>` without a rowID to add a top-level
 *      row.
 * @param {string} subLevel The fully-qualified name of the inner level to create. Nested repeating
 *      section support multiple kind of nested row for a given row, this indicates which one to
 *      create. You can look in the `nestedFieldsetLayouts` constant exported from the PUG
 *      compilation for this value.
 * @param {Object} attributes The `attributes` proxy of the k-Scaffold attribute cascade, initially
 *      provided by k-scaffold in your trigger functions.
 * @param {string} sections The `sections` object of the k-Scaffold attribute cascade, initially
 *      provided by k-scaffold in your trigger functions.
 * @return {string} The created Row name, with the repeating section included, e.g.
 *      `repeating_<section>_<rowID>`.
 */
const addNestedSubrow = function (rowName, subLevel, attributes, sections) {
    const [section, rowID, _] = _parseRepeatName(rowName);
    _assertNotNull(section);
    const nestedLayout = nestedFieldsetLayouts[section];  // NOTE: exported by the PUG varObjects
    _assertNotNull(nestedLayout, `${section} is not a nested repeating section: no layout found.`);
    const selector = nestedLayout.selectorName;

    let validLevelQualname, rowLevel = null;
    if (rowID == null) {
        if (nestedLayout.nestedLayout.depth == 0) {
            validLevelQualname = [nestedLayout.nestedLayout.qualname];
        } else if (nestedLayout.nestedLayout.depth == -1) {
            // Multi-root repeating sections
            validLevelQualname = nestedLayout.nestedLayout.children.map(level => level.qualname);
        }
    } else {
        rowLevel = attributes[`${rowName}_${selector}`];
        validLevelQualname = nestedLayout.flattenedLayout[rowLevel].children;
    }
    _assertContains(
        validLevelQualname,
        subLevel,
        `Invalid nested level for row ${rowName} with level ${rowLevel}: expected one of` +
        ` ${validLevelQualname}, got '${subLevel}'.`
    );


    const newRowID = _getNextSubrowID(rowID, sections[section]);
    k.generateRowID(section, sections, newRowID);
    attributes[`${section}_${newRowID}_rowid`] = newRowID;
    attributes[`${section}_${newRowID}_${selector}`] = subLevel;

    console.log({
        event: 'addNestedSubrow',
        rowName, subLevel, attributes, sections, section, rowID, nestedLayout, selector, rowLevel,
        newRowID
    });
    return `${section}_${newRowID}`;
};



/**
 * Delete a nested row and all sub-rows in a nested repeating section.
 *
 * This function wraps {@link k.removeRepeatingRow} and properly deletes all sub-rows when deleting
 * a row in a nested repeating section.
 *
 * @param {string} rowName The name of the row in which to create a sub-row, in the Roll20 format,
 *      i.e. `repeating_<section>_<rowID>`.
 * @param {Object} attributes The `attributes` proxy of the k-Scaffold attribute cascade, initially
 *      provided by k-scaffold in your trigger functions.
 * @param {string} sections The `sections` object of the k-Scaffold attribute cascade, initially
 *      provided by k-scaffold in your trigger functions.
 * @return {string[]} The list of subrow names that where deleted alongside the passed row name;
 */
const deleteNestedRow = function (rowName, attributes, sections) {
    const [section, rowID, _] = k.parseRepeatName(rowName);
    const sectionRowIDs = sections[section];

    const subRowIDs = getSubrowIDs(rowID, sectionRowIDs);
    const subRowNames = subRowIDs.map((subRowID) => `${section}_${subRowID}`);

    // Delete all children
    subRowNames.forEach(
        (subRowName) => {
            k.removeRepeatingRow(subRowName, attributes, sections);
        },
    );

    console.log({
        event: 'deleteNestedRow',
        rowName, attributes, sections, section, rowID, subRowNames,
    });

    return subRowNames;
};


/**
 * Return the subrow IDs of a nested row
 * @param {string} rowID The RowID (including the mandatory leading `-`) of the row to get subrows of
 * @param {string[]} sectionRowIDs The array of rowIDs in the repeating section, as provided by
 *      K-Scaffold `sections` object under the repeating section's name.
 * @return {string[]} The array of subRowIDs for the input row
 */
const getSubrowIDs = function (rowID, sectionRowIDs) {
    // Find the prefix for the rowId, skipping the mandatory leading "-"
    const placeholderIndex = rowID.indexOf(_nestedLevelPlaceholderChar, 1);
    const prefix = rowID.slice(0, placeholderIndex);

    // Filter the section RowIds to find only children of the rowId
    const regex = new RegExp(`^${prefix}`);
    const subrowIDs = sectionRowIDs.filter((id) => regex.test(id));

    console.log({
        event: "getSubrowIDs", rowID, sectionRowIDs, subrowIDs
    });

    return subrowIDs;
};
const getNestedRowTree = null;

/* ========================================================================
 * Triggers: implementation of the triggers for the +nestedFieldset() mixin
 * ========================================================================
 */

/** Trigger function called by the Add buttons in the +nestedFieldset() mixin */
const _kAddNestedSubrowTrigger = function ({ trigger, attributes, sections }) {
    const [section, rowID, _] = k.parseTriggerName(trigger.name);
    let rowName;
    if (section == null) {
        // External trigger button that adds a top-level row
        rowName = `${trigger.data.section}`;
    } else {
        _assertEqual(trigger.data.section, section);
        rowName = `${section}_${rowID}`;
    }
    const level = trigger.data.levelQualname;

    console.log({
        event: '_kAddNestedSubrowTrigger',
        trigger, attributes, sections, section, rowID, rowName, level
    });
    addNestedSubrow(rowName, level, attributes, sections);
};
k.registerFuncs({ _kAddNestedSubrowTrigger });



/** Trigger function called upon row deletion in the +nestedFieldset() mixin */
const _kDeleteNestedRowTrigger = function ({ trigger, attributes, sections }) {
    const [section, rowID, _] = k.parseRepeatName(trigger.sourceAttribute);
    _assertEqual(trigger.data.section, section);

    console.log({
        event: '_kDeleteNestedRowTrigger', trigger, attributes, sections, section, rowID
    });
    deleteNestedRow(`${section}_${rowID}`, attributes, sections);
};
k.registerFuncs({ _kDeleteNestedRowTrigger });



/** Trigger function called when the sheet is opened, to check & save the nested layouts */
const _kRegisterNestedLayouts = function ({ trigger, attributes }) {
    console.log({
        event: "_kRegisterNestedLayouts",
        nestedFieldsetLayouts,
    });
    for (const [section, nestedLayout] of Object.entries(nestedFieldsetLayouts)) {
        let savedLayout = null;
        if (attributes[nestedLayout.layoutAttribute]) {
            savedLayout = JSON.parse(attributes[nestedLayout.layoutAttribute]);
            if (!_checkLayoutAreCompatible(nestedLayout, savedLayout)) {
                // nestedFieldset--${sectionName}
                $20(`.nestedFieldset--${nestedLayout.sectionName}`).addClass("brokenLayout");
                k.log(
                    `!! Nested repeating section ${section} has changed layout` +
                    ` for an incompatible one !!`
                );
            } else {
                attributes[nestedLayout.layoutAttribute] = JSON.stringify(nestedLayout);
            }
        } else {
            attributes[nestedLayout.layoutAttribute] = JSON.stringify(nestedLayout);
        }
        console.log({ event: "_kRegisterNestedLayouts", sectionName: section, nestedLayout, savedLayout });
    }
};
k.registerFuncs({ _kRegisterNestedLayouts }, { type: ['opener'] });

/* ==============================================================================
 * Internals: Helper functions for the implementation of the above triggers & API
 * ==============================================================================
 */

const _parseRepeatName = function (string) {
    let match = string.match(/(repeating_[^_]+)(?:_([^_]+))?(?:_(.+))?/);
    if (match == null) {
        return null;
    }
    match.shift();
    return match;
};

// Check helpers

const _assertNotNull = function (value, msg) {
    if (value == null) {
        k.log(msg);
        throw new Error(msg);
    }
};
const _assertContains = function (array, value, msg) {
    if (array.indexOf(value) < 0) {
        k.log(msg);
        throw new Error(msg);
    }
};
const _areObjectEquals = function (a, b) {
    // From https://stackoverflow.com/a/52645018
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
    if (a === null || a === undefined || b === null || b === undefined) return false;
    if (a.prototype !== b.prototype) return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => _areObjectEquals(a[k], b[k]));
}
const _assertEqual = function (expected, actual, msg = null) {
    msg = msg || `Expected '${expected}', got '${actual}'.`;
    if (!_areObjectEquals(expected, actual)) {
        k.log(msg);
        throw new Error(msg);
    }
};

const _checkLayoutAreCompatible = function (newLayout, oldLayout) {
    // TODO: better handling and auto-update
    return _areObjectEquals(newLayout, oldLayout);
};

// Nested RowID encoding


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
const _nestedRowIDPartToCodeUnit = function (value) {
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
const _codeUnitToNestedRowIDPart = function (value) {
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
 * Given a parent RowID and a repeating section, give the next available children rowID 
 * @param {string?} rowID
 * @param {string[]} sectionRowIDs
 * */
const _getNextSubrowID = function (rowID, sectionRowIDs) {
    rowID = rowID || '-'.concat(_nestedLevelPlaceholderChar.repeat(_Roll20RowIDLength));
    // Find the prefix for the rowId, skipping the mandatory leading "-"
    const placeholderIndex = rowID.indexOf(_nestedLevelPlaceholderChar, 1);
    const prefix = rowID.slice(0, placeholderIndex);

    // Filter the section RowIds to find only children of the rowId
    const regex = new RegExp(`^${prefix}`);
    const subrowIDs = sectionRowIDs.filter((id) => regex.test(id));

    // Since we encode 1 level per character, we can easily decode all the children id
    const childrenCharCodes = subrowIDs.map((id) => id.charCodeAt(placeholderIndex));
    const childrenIds = childrenCharCodes.map((codeUnit) => _codeUnitToNestedRowIDPart(codeUnit));

    // NOTE: we add a 0 for when there are no children
    // NOTE: the placeholder character is decoded to -1, so if no children exist, this still works
    const newPart = Math.max(-1, ...childrenIds) + 1;
    const newCodeUnit = _nestedRowIDPartToCodeUnit(newPart);
    const newChar = String.fromCharCode(newCodeUnit);
    const suffix = _nestedLevelPlaceholderChar.repeat(_Roll20RowIDLength - prefix.length);
    const newId = `${prefix}${newChar}${suffix}`;
    console.log({
        event: '_getNextSubrowID',
        rowID,
        sectionRowIDs,
        placeholderIndex,
        prefix,
        regex,
        subrowIDs,
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
