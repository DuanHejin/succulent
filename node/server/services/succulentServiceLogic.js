const createDBConnection = require('../utils/createDBConnection');

const conc = createDBConnection();

// service logic
const getSucculentList = (callback) => {
  const sql = 'SELECT * FROM DHJ_IMG';
  conc.query(sql, callback);
};

const getSucculentTagList = (callback) => {
  const sql = 'SELECT distinct(DHJ_TAG) FROM DHJ_IMG';
  conc.query(sql, callback);
};

const getSucculentListByTag = (tag, callback) => {
  const sql = `SELECT * FROM DHJ_IMG WHERE DHJ_TAG LIKE '%${tag}%'`;
  conc.query(sql, callback);
};

module.exports = {
  getSucculentList,
  getSucculentTagList,
  getSucculentListByTag,
}