import * as express from 'express'
import * as bodyParser from 'body-parser'
import codeRouter from './router/codeRouter'
import taskRouter from './router/taskRouter'

const server = express()
const port = 8081
console.log(`server is running at http://127.0.0.1:${port}`)
server.listen(port)

server.use(express.static('public'))

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.use('/task', taskRouter)
server.use('/code', codeRouter)
