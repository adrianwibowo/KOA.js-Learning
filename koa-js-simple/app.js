// Modules
const Koa = require('koa')
const json = require('koa-json')
const KoaRouter = require('koa-router')
const path = require('path')
const render =  require('koa-ejs')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')

// Initiator
const app = new Koa()
const router =  new KoaRouter()


// DB COnnection
const things = ['haha', 'hihi', 'huhu']

// Json pretier
app.use(json())

// bodyParser Middleware
app.use(bodyParser())

// Logger libary  because morgan cannot and basic logger not so intuitive
app.use(logger())

// basic logger
// app.use(async (ctx, next) => {
//     await next();
//     const rt = ctx.response.get('X-Response-Time');
//     console.log(`${ctx.method} ${ctx.url} - ${rt}`);
//   });



// Example intial router middleware
// app.use(async ctx => ctx.body = 'Hello World')
// app.use(async ctx => ctx.body = { msg: 'Hello world'})


app.context.user = 'Adrian'

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
})

// Index next level routes
router.get('/', index)

async function index(ctx) {
    await ctx.render('index', {
        title: 'things I love:',
        things : things
    })
}


// Index basic route
// router.get('/', async ctx => {
//     await ctx.render('index', {
//         title: 'things I love:',
//         things : things
//     })
// })


// Show add page
async function showAdd(ctx) {
    await ctx.render('add')
}


async function add(ctx) {
    const body = ctx.request.body
    things.push(body.thing)
    ctx.redirect('/')
}

router.get('/add', showAdd)
router.post('/add', add)

router.get('/test', ctx => {ctx.body = `Hello ${ctx.user}`})
router.get('/test2/:name', ctx => {ctx.body = `Hello ${ctx.params.name}`})

// Router Middleware
app.use(router.routes()).use(router.allowedMethods())




app.listen(8888, () => console.log('sever started...'))