
/**
 * mongoose 中任何任何事物都是从 Schema 开始的。
 * 每一个 Schema 对应 MongoDB 中的一个集合（collection
 */

// 用户表
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: String,
  password: String,
  create_time: String,
  token: {
    type: String,
    default: ''
  }
})

const User = mongoose.model('users', UserSchema)
module.exports = User
