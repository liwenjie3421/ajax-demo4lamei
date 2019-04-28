const express = require('express');
const bodyParser = require('body-parser');
const codeRouter = require('./router/codeRouter');

var server = express();

console.log('server is running at http://127.0.0.1:8080')
server.listen(8080);

server.use(express.static('public'));

server.use(bodyParser.urlencoded({
    extended: false
}));

server.use('/code', codeRouter);
