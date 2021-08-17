const User = require("../model/user")


const getUserInfo = async (ctx, next) => {
  ctx.body = '看看接口走通没'
  //根据用户名查询
  let user = await User.findOne({name:'guorong'}).exec()
  console.log(user)
};

module.exports = {
  getUserInfo
}