
const loader = require('./loaders');
const bodyParser = require('koa-bodyparser'); //接受post请求 koa-bodyparser


const Koa = require("koa");
const cors = require('koa-cors');
const app = new Koa();

app.use(cors());
app.use(bodyParser());
loader.init(app);

module.exports = app;