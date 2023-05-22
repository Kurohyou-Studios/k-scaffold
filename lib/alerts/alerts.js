const kCreateAlert = function ({ name, title, text, attributes, sections, level = "info" }) {
    if (["info", "warning", "error", "success"].indexOf(level) === -1) {
        throw new Error(`Invalid alert level "${level}"`);
    }
    // Warning: the name isn't sanitized like it is in the PUG, might create discrepancies
    const section = `repeating_alerts--${name}`;
    // Contrary to doc, k.generateRowID also includes the section name in the returned value
    const rowID = k.generateRowID(section, sections);
    console.log(`Created new rowID: ${rowID}`);
    attributes[`${rowID}_level`] = level;
    attributes[`${rowID}_title`] = title;
    attributes[`${rowID}_text`] = text;
};

const kDeleteAlert = function ({ trigger, attributes, sections }) {
    const [section, rowID, _] = k.parseTriggerName(trigger.name);
    k.removeRepeatingRow(`${section}_${rowID}`, attributes, sections);
};

k.registerFuncs({kDeleteAlert});