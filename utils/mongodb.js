
// 引人mongoose依赖
const mongoose = require('mongoose')

// 创建数据库
const dbUrl = 'mongodb://localhost:27017/test'
// 链接数据库

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, client) => {
  if (!err) {
    console.log('数据库连接成功')
  }
})

// 导出数据库
module.exports = mongoose
