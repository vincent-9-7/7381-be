const SellerTable = require('../../../model/seller');


//Get all sellers
exports.index = async (ctx) => {
    const getAllSellerResult = await SellerTable.find({});
    if (getAllSellerResult.length > 0) {
        ctx.body = getAllSellerResult;
    } else {
        ctx.status = 404;
        ctx.body = { errors: "There are no sellers!"};
    }
 };

 //GET by objectId
exports.show = async (ctx) => {
    const { id } = ctx.params;
    console.log(id);
    const sellerInfo = await SellerTable.findById({_id:id});
    if(!sellerInfo) { 
        ctx.body = `Can't find the seller by ID: ${id}`; 
    } else {
        ctx.body = sellerInfo;
    }
  };
  
  //POST
  exports.store = async (ctx) => {
    const {body} = ctx.request;  
    const user = new SellerTable(body);
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
    SellerTable.findByIdAndUpdate({_id:id},body,function(err,result) {
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
  //   SellerTable.findById({_id:id},function (err, result) {
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

  
  
  