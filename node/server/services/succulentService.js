const mysql = require('mysql');
const {dbConfig} = require('../dbConfig');
const {resolvePath} = require('../utils/path');
const {resolveDBObj} = require('../utils/resolveDBObj');

const conc = mysql.createConnection(dbConfig);
conc.connect();

// service logic
const getSucculentList = (callback) => {
  const sql = 'SELECT * FROM DHJ_IMG';
  conc.query(sql, callback);
};

const getSucculentTagList = (callback) => {
  const sql = 'SELECT distinct(DHJ_TAG) FROM DHJ_IMG';
  conc.query(sql, callback);
};

// Dependency Injection
const registGetSucculentList = (app) => {
  const url = resolvePath('succulent');
  app.get(url, (req, res) => {
    const callback = (err, rows) => {
      const result = rows.map(row => resolveDBObj(row));
      res.send(result);
    }
    getSucculentList(callback);
  });
};

const registGetTagList = (app) => {
  const url = resolvePath('succulent/tags');
  app.get(url, (req, res) => {
    const callback = (err, rows) => {
      const result = rows.map(row => resolveDBObj(row)).map(row => row.tag);
      res.send(result);
    }
    getSucculentTagList(callback);
  });
};

// interface
const registSucculentService = (app) => {
  registGetSucculentList(app);
  registGetTagList(app);
  console.log('registSucculentService successfully!');
};

module.exports = {
  registSucculentService
};
