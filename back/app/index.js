const express = require('express');

const app = express();
const router = require('./routers');
const router2= require('./routers/routerAuth');
app.use(express.urlencoded({ extended: true }));

//! penser aux CORS
app.use(router2);
module.exports = app;
