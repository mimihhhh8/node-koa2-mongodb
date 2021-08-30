/**
 * restful api 子路由 发布文章
 */

const router = require('koa-router')()
const articleController = require('../../controller/article/publish-article')

const routers = router
  .post('/publisharticle', articleController.uploadArticlePic)

module.exports = routers
