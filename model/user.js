
/**
 * mongoose 中任何任何事物都是从 Schema 开始的。
 * 每一个 Schema 对应 MongoDB 中的一个集合（collection
 */


const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:String
})

const User = mongoose.model('t1', UserSchema)
module.exports = User