const customCascKeys = (cascObj,trigger) => {
  Object.entries(trigger).forEach(([key,val]) => {
    if(!cascObj.hasOwnProperty(key)){
      cascObj[key] = val;
    }else if(
      Array.isArray(cascObj[key]) &&
      Array.isArray(val)
    ){
      cascObj[key] = cascObj[key] || [];
      cascObj[key].push(...val);
      cascObj[key] = [...new Set(cascObj[key])];
    }else if(
      typeof cascObj[key] === 'object' &&
      typeof val === 'object' &&
      !Array.isArray(cascObj[key]) &&
      !Array.isArray(val)
    ){
      cascObj[key] = customCascKeys(cascObj[key],val)
    }
  });

  if(cascObj.name === 'attribute_with_custom_props'){
    debugger;
  }
  return cascObj;
};

module.exports = customCascKeys;