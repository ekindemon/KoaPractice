// app.js
// 加载依赖
const koa = require('koa');
const fs = require('fs')
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const apiRouter = require('./router');


const app = new koa();



// 首页
const index = router.get('/', ctx => {
    ctx.response.body = 'hello world';
}).routes();
//讀取login頁面
const login = router.get('/login', ctx => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./demo/login.html')
})
// app.use(login);
app.use(index, login);
app.use(bodyParser());
app.use(apiRouter.routes());



app.listen(3000);
