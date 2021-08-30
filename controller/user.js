const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')

const User = require('../model/user')
const createtoken = require('../utils/createtoken')

// 注册
const register = async (ctx) => {
  const { name, pass } = ctx.request.body
  const token = createtoken(name)

  const findUser = await User.findOne({ username: name })

  if (findUser && Object.keys(findUser).length !== 0) {
    findUser.username = name
    ctx.body = {
      code: 1,
      msg: '用户名重复'
    }
  } else if (!findUser) {
    const userData = new User({
      username: name,
      password: pass,
      create_time: null,
      token: token
    })
    userData.create_time = moment(objectIdToTimestamp(userData._id)).format('YYYY-MM-DD HH:mm:ss')
    await userData.save()
    if (Object.keys(userData).length !== 0) {
      ctx.body = {
        code: 1,
        msg: '注册成功',
        data: userData
      }
    } else {
      ctx.body = {
        code: 0,
        msg: '注册失败'
      }
    }
  }
}

// login登录
const login = async (ctx) => {
  const { name, pass } = ctx.request.body
  const findUser = await User.findOne({ username: name })

  if (!findUser) {
    ctx.body = {
      code: 1,
      msg: '用户不存在'
    }
  } else if (findUser.password === pass) {
    // 生成一个新的token并存入数据库
    const token = createtoken(name)
    findUser.token = token
    await findUser.save()
    ctx.body = {
      code: 1,
      msg: '登录成功',
      data: {
        username: name,
        token,
        create_time: findUser.create_time
      }
    }
  } else {
    ctx.body = {
      code: 0,
      msg: '密码错误'
    }
  }
}

module.exports = {
  register,
  login
}
