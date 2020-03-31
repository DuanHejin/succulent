const convertArrToCluster = (arr) => {
  const result = {};
  if (arr instanceof Array) {
    arr.reduce((pre, cur) => {
      const {tag} = cur;
      result[tag] ? result[tag].push(cur) : result[tag] = [cur];
    }, result);
  }
  return result;
};

module.exports = {
  convertArrToCluster
}