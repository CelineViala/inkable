const http = require('http');
require('dotenv').config();
const debug = require('debug')('app:server');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'Library API',
//             version: '1.0.0',
//             description: 'A simple Express library API',
//         },
//         servers: [
//             {
//                 url: 'http://localhost:3000',
//             },
//         ],
//     },
//     apis: ['./app/routers/*.js'],
// };

// const specs = swaggerJsDoc(options);

const app = require('./app');

const port = process.env.PORT ?? 3000;

const server = http.createServer(app);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

server.listen(port, () => {
    debug(`Listening on ${port}`);
});
