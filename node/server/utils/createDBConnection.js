const mysql = require('mysql');
const {dbConfig} = process.env.NODE_ENV === 'production' ? require('../dbProdConfig') : require('../dbConfig');

let conc = null;

module.exports = () => {
  if (!conc) {
    conc = mysql.createConnection(dbConfig);
    conc.connect();
  }
  return conc;
}