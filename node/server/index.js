const express = require('express');
const path = require('path');
const app = express();
const {setContext} = require('./utils/path');
const {registSucculentService} = require('./services/succulentService');

// set server context first
const context = '/api';
setContext(context);

// set static resource
app.use(express.static(path.resolve(__dirname, './public')));

const HOST = 'localhost';
const PORT = '3001';

app.listen(PORT, HOST, () => {
  console.log(`server is runnig on port: ${PORT}`);
});

// regist servies at the end
registSucculentService(app);