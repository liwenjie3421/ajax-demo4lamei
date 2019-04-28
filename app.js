const express = require('express');
const bodyParser = require('body-parser');
const codeRouter = require('./router/codeRouter');

const server = express();
const port = 8081;
console.log(`server is running at http://127.0.0.1:${port}`);
server.listen(port);

server.use(express.static('public'));

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json())

server.use('/code', codeRouter);
