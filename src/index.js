const express = require('express');
const ip = require('ip')
require('dotenv').config();

const app = express();

const port = process.env.PORT || '3040';
const address = ip.address();
const protocol = process.env.PROTOCOL || 'http'

const routes = require('./router/routes');
app.use(routes);
app.listen(port, ()=> {
    console.log(`The server started in ${protocol}://localhost:${port} or ${protocol}://${address}:${port}`);
});

