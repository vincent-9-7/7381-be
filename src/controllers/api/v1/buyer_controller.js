const BuyerTable = require('../../../model/buyer');
const { inputValidator } = require("../../../utils/input_validator");
const bcrypt = require("bcryptjs");
const encryptor = require('../../../utils/encryptor');
// const secretOrKey = require("../../../config/key");
// const jwt = require("jsonwebtoken");

exports.registration = async (ctx) => {
  // Validate input
  const { errors, isValid } = inputValidator(ctx.request.body);
  if (!isValid) {
    ctx.status = 400;
    ctx.body = errors;
    return;
  }
  // Get whole buyer table
  const checkResult = await BuyerTable.find({});
  // If there is no data in the table, insert data to the database directly
  if (checkResult.length === 0) {
    const { password, email, username, address1, address2, city, state, postcode } = ctx.request.body;
    let newBuyer = new BuyerTable({
      email: email,
      password: encryptor.enbcrypt(password),
      username: username,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      postcode: postcode,
      // name: {lastName: email[0],
      //       firstName: email[1]},
      // password: encryptor.enbcrypt(password),
    });
    await newBuyer.save().then(user => {
      ctx.body = user;
    }).catch((err) => {
      console.log(err);
    });
    ctx.body = newBuyer;
  } else {
    // Check whether there are duplicate email address
    const checkResult = await BuyerTable.find({ email: ctx.request.body.email });
    if (checkResult.length > 0) {
      ctx.status = 500;
      ctx.body = { email: 'This email is already exist!' };
    }
    else {
      // const employeeID = (await BuyerTable.find().sort({ ID: -1 }).limit(1))[0].ID + 1
      const { password, email, username, address1, address2, city, state, postcode } = ctx.request.body;
      let newBuyer = new BuyerTable({
        // email: email,
        // password: encryptor.enbcrypt(password),
        // name: {lastName: email[0],
        //       firstName: email[1]},
        // password:hash.enbcrypt(password)
        email: email,
        password: encryptor.enbcrypt(password),
        username: username,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        postcode: postcode,
      });
      await newBuyer.save().then(user => {
        ctx.body = user;
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};


exports.login = async ctx => {
  // Validate input
  const { errors, isValid } = inputValidator(ctx.request.body);
  if (!isValid) {
    ctx.status = 400;
    ctx.body = errors;
    return;
  }
  // get buyer info
  const buyerInfo = await BuyerTable.find(
    { email: ctx.request.body.email },
  );
  const password = ctx.request.body.password;
  if (buyerInfo.length === 0) {
    ctx.status = 500;
    ctx.body = { error: "This email not registrated before!" };
  }
  else {
    //check password
    const result = await bcrypt.compareSync(password, buyerInfo[0].password);
    if (result) {
      ctx.status = 200;
      const { _id, username } = buyerInfo[0];
      // const payload = {email: email,id:_id};
      // const token = jwt.sign(payload, secretOrKey.secretOrKey, {expiresIn: 3600});
      ctx.body = {
        success: true,
        // token: "Bearer " + token, 
        ObjectId: _id,
        username: username
      };
    } else {
      ctx.status = 400;
      ctx.body = { error: "Password is wrong!" };
    }
  }
};


//Get all buyers
exports.index = async (ctx) => {
  const getAllBuyerResult = await BuyerTable.find({});
  if (getAllBuyerResult.length > 0) {
    ctx.body = getAllBuyerResult;
  } else {
    ctx.status = 404;
    ctx.body = { errors: "There are no buyers!" };
  }
};

//GET by objectId
exports.show = async (ctx) => {
  const { id } = ctx.params;
  console.log(id);
  const buyerInfo = await BuyerTable.findById({ _id: id });
  if (!buyerInfo) {
    ctx.body = `Can't find the buyer by ID: ${id}`;
  } else {
    ctx.body = buyerInfo;
  }
};

//POST
exports.store = async (ctx) => {
  const { body } = ctx.request;
  const user = new BuyerTable(body);
  await user
    .save()
    .then(user => {
      ctx.body = user;
    })
    .catch((err) => {
      console.log(err);
      ctx.body = `Error! ${err}`;
    });
};

//UPDATE BY ObejctId
exports.updateId = async (ctx) => {
  const { body } = ctx.request;
  const { id } = ctx.params;
  BuyerTable.findByIdAndUpdate({ _id: id }, body, function (err, result) {
    if (err) {
      ctx.body = {
        message: `ERROR by ${id}`
      };
      ctx.status = 404;
      return;
    }
    console.log(result);
  });
  ctx.body = `更新成功 by id: ${id}`;
};

    // delete
  // exports.deleteId = async (ctx) => {
  //   const {id} = ctx.params;
  //   BuyerTable.findById({_id:id},function (err, result) {
  //     if(err) {
  //       ctx.body = {
  //           message: `ERROR by ${id}` 
  //       };
  //       ctx.status = 404; 
  //       return;
  //     }
  //     result.remove();
  //     });
  //     ctx.body = `删除成功:${id}`;
  // };



