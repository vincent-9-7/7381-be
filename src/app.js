
const loader = require('./loaders');
const bodyParser = require('koa-bodyparser'); 
const Koa = require("koa");
const cors = require('koa-cors');
const app = new Koa();
app.use(require('koa-static')(__dirname + '/public'));
app.use(cors());
app.use(bodyParser());
// app.use(upload.routes(),upload.allowedMethods());
loader.init(app);

module.exports = app;