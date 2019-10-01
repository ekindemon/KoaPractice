// const sql = require('mssql')
class UserController {
  //用戶登入
  async login(ctx, next) {
    //獲取請求提交的數據
    console.log(ctx.request.body)
    let name = ctx.request.body.name || '',
        pwd = ctx.request.body.pwd || ''
        console.log(name , pwd)
    // do something

    ctx.body = {
      status:true,
      token:'123'
    }
  }
  //用戶信息
  async userInfo(ctx, next) {
    // do something
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
    let data =　{
      name: 'jk',
      age: 25
    }
    // let aa = async () => {
    //   try {
    //       await sql.connect(config)
    //       const result = await sql.query`select COMPANY, MODI_DATE from NOTTG `
    //       console.log(result)
    //       console.timeEnd('endtime')
    //   } catch (err) {
    //       console.log(err)
    //   }
    // }
    // aa()
    // 假設這是請求回來的數據
    ctx.body={
      status:true,
      data
    }
  }
}
module.exports = new UserController();