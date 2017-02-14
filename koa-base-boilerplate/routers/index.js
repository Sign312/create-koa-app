let Router = require('koa-router')
let fileCmd = require('file-cmd')

let router = new Router()

router.get('/', async function (next) {
    this.body = 'hello,my koa app !'
    await next
})

module.exports = router