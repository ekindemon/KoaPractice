// app.js
// 加载依赖
console.time('endtime')
const koa = require('koa');
const fs = require('fs')
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const apiRouter = require('./router');
const sql = require('mssql')

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

//連結資料庫

var config = {
  user: 'sa', //appuser
  password: '123', //  
  server: '127.0.0.1', //localhost       
  port : 1433 ,
  database: 'LeaderDemo',  //test
  encrypt: true,
  debug: true 

};

let aa = async () => {
  try {
      await sql.connect(config)
      const result = await sql.query`select COMPANY, MODI_DATE from NOTTG `
      console.log(result)
      console.timeEnd('endtime')
  } catch (err) {
      console.log(err)
  }
}
aa()

app.listen(3000);
