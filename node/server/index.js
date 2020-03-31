const express = require('express');
const path = require('path');
const app = express();
const apiRoutes = express.Router();
const registSucculentService = require('./services/succulentService');
const handleProduction = require('./utils/handleProduction');

// set server context first
const context = '/api';

// set static resource
app.use(express.static(path.resolve(__dirname, 'public')));
handleProduction(app, express, path);

// regist services on express.Router()
registSucculentService(apiRoutes);
// make sure regist services before 'app.use(context, apiRoutes)'
app.use(context, apiRoutes);

const args = process.argv.slice(2);
const port = args[0];

const PORT = port | '3001';

app.listen(PORT, () => {
  console.log(`server is runnig on port: ${PORT}`);
});