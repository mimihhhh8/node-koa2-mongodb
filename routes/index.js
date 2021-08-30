/**
 * 整合所有子路由
 */

const router = require('koa-router')()

const user = require('./user')
const article = require('./article/publish-article')
const upload = require('./article/upload')

//  用户
router.use('/user', user.routes(), user.allowedMethods())

//  发布文章
router.use('/article', article.routes(), article.allowedMethods())

//  上传图片
router.use('/upload', upload.routes(), upload.allowedMethods())
module.exports = router
