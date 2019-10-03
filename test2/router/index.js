//加載依賴
const router = require('koa-router')()
const userctrl = require('../controllers/users/UserController')

      //用戶模塊
router
      .post('/api/user/login', userctrl.login)
      .get('/api/user/userinfo', userctrl.userInfo)
      // .put('xxx')
      // .delete('xxx')

module.exports = router