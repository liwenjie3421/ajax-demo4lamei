const express = require('express');
var codeRouter = express.Router();

codeRouter.get('/code/list', (req, res) => {
    res.send('success')
})
codeRouter.post('/code/', (req, res) => {
    res.send('success')
})

module.exports = codeRouter;