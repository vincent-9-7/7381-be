// const mongoose = require('mongoose');
const userTable = require ('../../../model/newUser')

//1.1 这是GET ALL USER
exports.index = async (ctx) => {
  // var userTable=mongoose.model('user-table');
  var searchResult = await userTable.find({},(err, result) =>{
      if(err) {
          ctx.body = {
              message: `ERROR by ${id}` //如何才能触发error？
          };
          ctx.status = 404; //因为有ctx.body，所以系统自动改成200，但是因为error，所以需要设置成404
      }
      return result;
  })

  if(searchResult.length < 1) { //如果搜索不到该订单，报错。返回{''}
      ctx.body = `There is no user in this list`; //不用返回报错代码，前端判断取回的ctx.body是一个对象还是字符串，字符串即为error
      // ctx.status = 404;
  } else {
      ctx.body = searchResult
  }
}

//1.2 这是GET by ID
exports.show = async (ctx) => {
  const { id } = ctx.params;//ctx.params.userID
  // var userTable=mongoose.model('user-table');
  var searchResult = await userTable.find({"ID":`${id}`},(err, result) =>{
      if(err) {
          ctx.body = {
              message: `ERROR by ${id}` //如何才能触发error？
          };
          ctx.status = 404; //因为有ctx.body，所以系统自动改成200，但是因为error，所以需要设置成404
      }
      return result;
  })

  if(searchResult.length < 1) { //如果搜索不到该订单，报错。返回{''}
      ctx.body = `Can't fint this order by ID: ${id}`; //不用返回报错代码，前端判断取回的ctx.body是一个对象还是字符串，字符串即为error
      // ctx.status = 404;
  } else {
      ctx.body = searchResult
  }
}

//2. 这是POST
exports.store = async (ctx) => {
  const {body} = ctx.request;  //Postman里面的body，请求
  const user = new userTable(body);
  // try {
  //     await user.save();
  //     const token = "this is token abc";
  //     ctx.status(201).send({user, token});
  //     ctx.body = `User created success!`;
  // } catch (e) {
  //     ctx.body = e;
  // }

  await user
  .save()
  .then(user => {
      ctx.body = user;
  })
  .catch((err) => {
      console.log(err);
      ctx.body=`Error! ${err}`
  });
}

//3.1 这是DELETE BY _id
exports.deleteId = async (ctx) => {
  const {_id} = ctx.params;
  // var userTable=mongoose.model('user-table');
  userTable.findById(`${_id}`,function (err, result) {
    if(err) {
      ctx.body = {
          message: `ERROR by ${_id}` //如何才能触发error？
      };
      ctx.status = 404; //因为有ctx.body，所以系统自动改成200，但是因为error，所以需要设置成404
      return;
    }
    // 删除by _id 才可以用remove(),否则要用userTable.deleteOne({"ID":`${id}`}
    result.remove();
    })
    ctx.body = `删除成功:${_id}`;
}

//3.2 这是DELETE BY task_ID
exports.delete = async (ctx) => {
  const {id} = ctx.params;
  // var userTable=mongoose.model('user-table');
  userTable.deleteOne({"ID":`${id}`},function(err,result) {
    if (err) {
      ctx.body = {
        message: `ERROR by ${id}` //如何才能触发error？
      };
      ctx.status = 404; //因为有ctx.body，所以系统自动改成200，但是因为error，所以需要设置成404          
      return;
    }
    console.log(result)
  })
  console.log("删除成功");
  ctx.body = `删除成功:${id}`; 
}

//4.1 这是UPDATE BY _id
exports.updateId = async (ctx) => {
  const {body} = ctx.request;
  const {_id} = ctx.params;
  // var userTable=mongoose.model('user-table');
  userTable.findByIdAndUpdate(`${_id}`,body,function(err,result) {
    if (err) {
      ctx.body = {
        message: `ERROR by ${id}` //如何才能触发error？
      };
      ctx.status = 404; //因为有ctx.body，所以系统自动改成200，但是因为error，所以需要设置成404          
      return;
    }
    console.log(result);
  })
  ctx.body = `更新成功 by id: ${_id}`; 
}

//4.2 这是UPDATE BY User_ID
exports.update = async (ctx) => {
  const {body} = ctx.request;
  const {id} = ctx.params;
  // var userTable=mongoose.model('user-table');
  userTable.findOneAndUpdate({"ID":`${id}`},body,function(err,result) {
    if (err) {
      ctx.body = {
        message: `ERROR by ${id}` //如何才能触发error？
      };
      ctx.status = 404; //因为有ctx.body，所以系统自动改成200，但是因为error，所以需要设置成404          
      return;
    }
    console.log(result);
  })
  ctx.body = `更新成功 by id: ${id}`; 
}


