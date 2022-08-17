const express = require('express');

const app = express();
const router = require('./routers');
const routerAuth= require('./routers/routerAuth');
app.use(express.urlencoded({ extended: true }));

//! penser aux CORS
app.use(router);
module.exports = app;
