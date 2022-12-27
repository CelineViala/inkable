const express = require('express');
const cors = require('cors');

const app = express();

require('./helpers/apiDocs')(app);
const router = require('./routers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const corsOptions = {
    origin: '*', //! update si mise en prod
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(router);
module.exports = app;
