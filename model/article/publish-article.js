// 发布文章

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 定义表
const PublishArticleSchema = new Schema({
  articletype: Number,
  articletitle: String,
  articlepic: String,
  articlecontent: String
})

// 创建表
const PublishArticle = mongoose.model('abc1', PublishArticleSchema)
module.exports = PublishArticle
