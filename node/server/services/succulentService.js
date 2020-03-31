const { resolveDBObj } = require('../utils/resolveDBObj');
const { convertArrToCluster } = require('../utils/convertArrToCluster');
const {
  getSucculentList,
  getSucculentTagList,
  getSucculentListByTag
} = require('./succulentServiceLogic');

// Dependency Injection
const registGetSucculentList = (apiRoutes) => {
  const url = '/succulent';
  apiRoutes.get(url, (req, res) => {
    const callback = (err, rows) => {
      const result = rows ? rows.map(row => resolveDBObj(row)) : [];
      const cluster = convertArrToCluster(result);
      res.send(cluster);
    }
    getSucculentList(callback);
  });
};

const registGetTagList = (apiRoutes) => {
  const url = '/succulent/tags';
  apiRoutes.get(url, (req, res) => {
    const callback = (err, rows) => {
      const result = rows.map(row => resolveDBObj(row)).map(row => row.tag);
      res.send(result);
    }
    getSucculentTagList(callback);
  });
};

const registGetSucculentListByTag = (apiRoutes) => {
  const url = '/succulent/byTag';
  apiRoutes.get(url, (req, res) => {
    const callback = (err, rows) => {
      const result = rows ? rows.map(row => resolveDBObj(row)) : [];
      const cluster = convertArrToCluster(result);
      res.send(cluster);
    }
    const { tag } = req.query;
    getSucculentListByTag(tag, callback);
  });
};

// interface
const registSucculentService = (apiRoutes) => {
  registGetSucculentList(apiRoutes);
  registGetTagList(apiRoutes);
  registGetSucculentListByTag(apiRoutes);
  console.log('registSucculentService successfully!');
};

module.exports = registSucculentService;
