const resolveDBObj = (dbObj) => {
  let result = {};
  if (typeof dbObj !== 'object') {
    return result;
  }
  Object.keys(dbObj).reduce((prevValue, currentValue) => {
    const newKey = currentValue.split('_')[1].toLowerCase();
    Object.assign(result, {[newKey]: dbObj[currentValue]});
  }, result);
  return result;
}

module.exports = {
  resolveDBObj
};