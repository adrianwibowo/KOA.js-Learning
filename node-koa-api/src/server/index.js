const Koa = require('koa');
const dbSetup = require('./db/db-setup')
const bodyParser = require('koa-bodyparser');

const indexRoutes = require('./routes/index');
const movieRoutes = require('./routes/movies');

const app = new Koa();
const PORT = process.env.PORT || 2107;


dbSetup()
app.use(bodyParser())
app.use(indexRoutes.routes());
app.use(movieRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;