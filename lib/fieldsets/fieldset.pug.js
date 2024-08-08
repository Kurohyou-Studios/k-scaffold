/**
     * The length in UTF-16 code units of a flat Roll20 RowID, excluding the mandatory leading "-".
     * TODO: keep in sync with the value in _nestedFieldset.js
     * @const @private
     * @type {number}
     */
const _Roll20RowIDLength = 19;

/**
 * A Stack to implement DFS on nested +nestedFieldset() calls
 */
const _nestedFieldsetStack = [];

/** A reference to the current level being processed, to build the tree while
 * walking it (we'll register the children in an attribute of this object)
 * It also indicates whether we are currently inside another +nestedFieldset()
 * or not
 */
let _currentNestedLevel = null;

// prepare k-scaffold varObjects to store nested fieldset data
varObjects.nestedFieldsetLayouts = varObjects.nestedFieldsetLayouts || {};

/** Helper functions to clean up our tree structure to something that is JSON-able
 *  strips PUG-runtime functions used to build the HTML
 */
const _nestedLevelToNestedLayout = function (nestedLevel) {
    const nestedLayout = { ...nestedLevel };
    nestedLayout.parentQualname = nestedLayout.parent ? nestedLayout.parent.qualname : null;
    // Remove unused attributes: PUG runtime references, etc...
    delete nestedLayout.attributes;
    delete nestedLayout.block;
    delete nestedLayout.parent;
    if (nestedLayout.layoutAttribute) {
        delete nestedLayout.layoutAttribute;
    }
    nestedLayout.children = nestedLayout.children.map(_nestedLevelToFieldsetLayout);
    return nestedLayout;
};
const _nestedLevelToFlattenedLayout = function (nestedLevel, map = null) {
    map = map || {};
    const flatLayout = { ...nestedLevel };
    flatLayout.parentQualname = flatLayout.parent ? flatLayout.parent.qualname : null;
    // Remove unused attributes: PUG runtime references, etc...
    delete flatLayout.attributes;
    delete flatLayout.block;
    delete flatLayout.parent;
    if (flatLayout.layoutAttribute) {
        delete flatLayout.layoutAttribute;
    }
    map[flatLayout.qualname] = flatLayout;
    flatLayout.children.forEach(child => { _nestedLevelToFlattenedLayout(child, map) });
    flatLayout.children = flatLayout.children.map(child => child.qualname);
    return map;
};
const _nestedLevelToFieldsetLayout = function (nestedLevel) {
    return {
        sectionName: nestedLevel.sectionName,
        section: `repeating_${nestedLevel.sectionName}`,
        selectorName: nestedLevel.selectorName,
        layoutAttribute: nestedLevel.layoutAttribute,
        nestedLayout: _nestedLevelToNestedLayout(nestedLevel),
        flattenedLayout: _nestedLevelToFlattenedLayout(nestedLevel),
    };
};

/** Helper function to avoid unequal duplicate specification of nested repeating sections
 * From https://stackoverflow.com/a/52645018
 * Note this only checks the nested levels layout, not the actual attributes
 * This is because the nested level layout controls the RowID mapping and thus
 * must be coherent between all usage of the same fieldset. It is not necessary,
 * however, that actual attribute content is the same.
 * See https://wiki.roll20.net/BCS/Repeating_Sections#Duplicate_a_repeating_section_name_to_display_the_same_data_on_more_than_one_tab_or_present_a_summary_of_the_data_elsewhere
 */
const _areObjectEquals = (a, b) => {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
    if (a === null || a === undefined || b === null || b === undefined) return false;
    if (a.prototype !== b.prototype) return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => _areObjectEquals(a[k], b[k]));
};