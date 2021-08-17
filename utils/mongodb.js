

// 引人mongoose依赖
const mongoose =require("mongoose");

// 创建数据库
const db_url='mongodb://localhost:27017/test';
//链接数据库

mongoose.connect(db_url,{ useNewUrlParser: true, useUnifiedTopology: true }, async (err, client) => {
  if(!err){
    console.log('数据库连接成功')

    // 测试数据库连接成功是否可以取到数据库的数据
    // const Schema1 = mongoose.Schema;
    // const UserSchema1 = new Schema1({
    //     name:String
    // })
    // const User = mongoose.model('t1', UserSchema1)
    // let user =await User.findOne({name:'guorong'}).exec()
    // console.log(user)

  }
});

// 导出数据库
module.exports=mongoose;
