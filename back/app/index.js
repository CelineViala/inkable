const express = require('express');

const app = express();
const router = require('./routers');
const routerAuth= require('./routers/routerAuth');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//! penser aux CORS
app.use(routerAuth);
module.exports = app;
