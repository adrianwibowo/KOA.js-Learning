const Router = require('koa-router')
const PersonController = require('../controller/person')

const root = Router()

root.get('/', async ctx => {
    ctx.status = 200
    // console.log(ctx);
})

root.post('/person', PersonController.createPerson)

module.exports = root