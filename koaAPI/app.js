const Koa = require('koa')
const fs = require('fs')
const sql = require('mssql')
const json = require('koa-json')
const app = new Koa()
const Router = require('koa-router')

app.use(json())
let home = new Router()

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
// 子路由1
home.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

// 子路由2
let page = new Router()
page.get('/404', async ( ctx )=>{
  ctx.body = '404 page!'
}).get('/helloworld', async ( ctx )=>{
    //連結資料庫
    await (async function() {
      try {
        // console.log(this)
        await sql.connect(config)
        const result = await sql.query`select COMPANY, MODI_DATE from NOTTG `//for JSON AUTO
        sql.close()
        ctx.body = result.recordsets
        // aa()
      } catch (e) {
        console.log(e)
      }
    })()
})

// 装载所有子路由
let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
})