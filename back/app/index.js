const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./routers');
const routerAuth = require('./routers/routerAuth');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//! penser aux CORS
app.use(cors('*'));
app.use(router);
module.exports = app;
