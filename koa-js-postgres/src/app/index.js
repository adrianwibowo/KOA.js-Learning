const Koa = require('koa')
const router  = require('../routing/index')
const ResponseTime =require('koa-response-time')
const KoaLogger = require('koa-logger')


const app = new Koa()

// app.use(async (ctx, next) => {
//     await next()
//     console.log(ctx);
// })

app.use(ResponseTime())
app.use(KoaLogger())
app.use(router.routes())


exports.start = async function () {

    try {
        this.server = await app.listen(3000)
    } catch (error) {
        console.log(error);
    }
}

 