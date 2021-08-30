/**
 * restful api 子路由 发布文章
 */
const multer = require('koa-multer')
const fs = require('fs')
const router = require('koa-router')()

//  配置信息
const storage = multer.diskStorage({
  //  设置文件的存储位置
  // 文件保存路径
  destination: function (req, file, cb) {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const dir = 'public/uploads/' + year + month + day

    // 判断目录是否存在,已经存在的图片不能被写入文件夹
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {
        recursive: true
      })
    }

    cb(null, dir) // 注意路径必须存在
  },

  // 修改文件名称
  filename: function (req, file, cb) {
    const fileName = file.originalname
    cb(null, fileName)
  }
})

// 加载配置
const upload = multer({ storage: storage })

//  编写上传的接口
const uploadImg = async (ctx, next) => {
  ctx.body = {
    data: ctx.req.file
  }
}

const routers = router
  .post('/img', upload.single('myfile'), uploadImg)

module.exports = routers
