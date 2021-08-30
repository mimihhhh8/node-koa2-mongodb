const PublishArticle = require('../../model/article/publish-article')

const uploadArticlePic = async (ctx, next) => {
  const { articletype, articletitle, articlepic, articlecontent } = ctx.request.body

  const userData = await new PublishArticle({
    articletype,
    articletitle,
    articlepic,
    articlecontent
  }).save()

  if (Object.keys(userData).length !== 0) {
    ctx.body = {
      code: 1,
      msg: '新增成功'
      // data:userData
    }
  } else {
    ctx.body = {
      code: 0,
      msg: '新增失败',
      data: userData
    }
  }
}

module.exports = {
  uploadArticlePic
}
