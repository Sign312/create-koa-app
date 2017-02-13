let koa = require('koa')
let cors = require('koa-cors')
let bodyparser = require('koa-bodyparser')
var path = require('path');
let autoRoutes = require('koa-auto-routes')

let app = koa()

app
    .use(cors())
    .use(bodyparser())

autoRoutes(app, path.join(__dirname, 'routers'))

app.listen(9999)
