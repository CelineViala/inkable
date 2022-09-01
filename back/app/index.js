const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./routers');

//! A supprimer?

// process.on('unhandledRejection', (err) => {
//     throw err;
// });

// process.on('uncaughtException', (err) => {
//     console.log(err);
//     process.exit(0);
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors('*'));
app.use(router);
module.exports = app;
