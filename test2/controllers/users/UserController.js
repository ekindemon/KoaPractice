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
    let data =　{
      name: 'jk',
      age: 25
    }
    
    // 假設這是請求回來的數據
    ctx.body={
      status:true,
      data
    }
  }
}
module.exports = new UserController();