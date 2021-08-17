/**
 * restful api 子路由
 */

 const router = require('koa-router')()
 const userController = require('../controller/user')
 
 const routers = router
     .get('/userInfo', userController.getUserInfo)
 
 module.exports = routers
 