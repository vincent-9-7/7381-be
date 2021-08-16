const BuyerTable = require('../../../model/buyer');

//Get all buyers
exports.index = async (ctx) => {
    const getAllBuyersResult = await BuyerTable.find({});
      if (getAllBuyersResult.length > 0) {
        ctx.body = getAllBuyersResult;
    } else {
        ctx.status = 404;
        ctx.body = { errors: "There are no buyers!"};
    }
 };

 //GET by objectId
exports.show = async (ctx) => {
    const { id } = ctx.params;
    console.log(id);
    const buyerInfo = await BuyerTable.findById({_id:id});
    if(!buyerInfo) { 
        ctx.body = `Can't find the buyer by ID: ${id}`; 
    } else {
        ctx.body = buyerInfo;
    }
  };
  
  //POST
  exports.store = async (ctx) => {
    const {body} = ctx.request;  
    const user = new BuyerTable(body);
    await user
    .save()
    .then(user => {
        ctx.body = user;
    })
    .catch((err) => {
        console.log(err);
        ctx.body=`Error! ${err}`;
    });
  };
  
  //UPDATE BY ObejctId
  exports.updateId = async (ctx) => {
    const {body} = ctx.request;
    const {id} = ctx.params;
    BuyerTable.findByIdAndUpdate({_id:id},body,function(err,result) {
      if (err) {
        ctx.body = {
          message: `ERROR by ${id}` 
        };
        ctx.status = 404;         
        return;
      }
      console.log(result);
    });
    ctx.body = `更新成功 by id: ${id}` ; 
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

  
  
  