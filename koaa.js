const Koa = require('koa')
const Router = require('koa-router')
// 實例化
var app=new Koa()
var router = new Router()
// Koa 中間件
//匹配任何路由
app.use(async (ctx, next)=>{
  console.log(new Date())
  await next()
})
// ctx 上下文 context ，包含了request 和 response信息
//配置路由
router.get('/',async (ctx)=>{
  ctx.body='首頁' // 返回數據 相當於; 原生畫面的res.weiteHead()

})

router.get('/news',async (ctx)=>{
  ctx.body="這是一個新聞頁面"
})
router.get('/about',async (ctx)=>{
  ctx.body="關於我們"
})

//啟動路由

app
  .use(router.routes()) //啟動路由
  .use(router.allowedMethods()) //可以配置也可以不配置，建議配置。
  
app.listen(3000)