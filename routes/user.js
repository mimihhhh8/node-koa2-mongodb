/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userController = require('../controller/user')

const routers = router
  .post('/register', userController.register)
  .post('/login', userController.login)

module.exports = routers
