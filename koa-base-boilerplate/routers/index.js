let Router = require('koa-router')

let router = new Router()

router.get('/', function* (next) {
    this.body = 'hello,koa'
    yield next
})

module.exports = router