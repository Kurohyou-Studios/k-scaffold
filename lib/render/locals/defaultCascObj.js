const eventTypes = {
  roll:'clicked',
  action:'clicked',
  fieldset:'remove'
};
const typeDefs = {
  select:'',
  radio:'on',
  checkbox:'on',
  number:0,
  text:'',
  span:''
};
/**
 * Constructs the starting cascade object
 * @memberof Render
 * @param {string} cascName - The cascade formatted name (e.g. attr_my_attribute)
 * @param {Object} element - Object describing the element
 * @param {Object} trigger - Object describing the trigger
 * @returns {Object}
 */
const defaultCascObj = (cascName,element,trigger) => {
  let eventType = eventTypes[element.type] || 'change';
  let [,section,field] = trigger.name.match(/(repeating_[^_]+)_[^_]+_(.+)/) ||
    [,,trigger.name];
  const cascObj = {
    name:cascName.replace(/^[^_]+_/,''),
    type: element.type,
    triggeredFuncs: [],
    affects: [],
    addFuncs: [],
    listener: `${eventType}:${section ? `${section}:` : ''}${field}`,
    listenerFunc: 'accessSheet',
    defaultValue: 
      (element.type === 'checkbox' && !element.hasOwnProperty('checked')) ?
        0 :
        element.hasOwnProperty('value') ?
          element.value :
          typeDefs.hasOwnProperty(element.type) ?
            typeDefs[element.type] :
            ''
  };
  const strProps = ['calculation','listener','listenerFunc','initialFunc','formula'];
  strProps.forEach(prop => cascObj[prop] = trigger[prop] || cascObj[prop] || '');
  return cascObj;
}

module.exports = defaultCascObj;