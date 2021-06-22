const enforceNodePath = require('enforce-node-path')
const app =  require('./app')


enforceNodePath(__dirname) // ini buat apa?



app.start()