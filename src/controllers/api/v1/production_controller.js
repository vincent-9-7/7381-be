const ProductionTable = require('../../../model/production');
const SellerTable = require('../../../model/seller');

//Get all items
exports.index = async (ctx) => {
    const getAllItemResult = await ProductionTable.find({}).populate({path:"sellerDetail",model:SellerTable});
      if (getAllItemResult.length > 0) {
        ctx.body = getAllItemResult;
    } else {
        ctx.status = 404;
        ctx.body = { errors: "There are no items!"};
    }
 };

 //GET by objectId
exports.show = async (ctx) => {
    const { id } = ctx.params;
    console.log(id);
    const itemInfo = await ProductionTable.findById({_id:id}).populate({path:"sellerDetail",model:SellerTable});
    if(!itemInfo) { 
        ctx.body = `Can't find the item by ID: ${id}`; 
    } else {
        ctx.body = itemInfo;
    }
  };
  
  //POST
  exports.store = async (ctx) => {
    const {body} = ctx.request; 
    // console.log(body);
    const {quantity} = body;
    // console.log(quantity);
    body.postQuantity = quantity;  
    const item = new ProductionTable(body);
    await item
    .save()
    .then(item => {
        ctx.body = item;
    })
    .catch((err) => {
        console.log(err);
        ctx.body=`Error! ${err}`;
    });
  };

  //update
  exports.updateId = async (ctx) => {
    const {body} = ctx.request;
    const {id} = ctx.params;
    ProductionTable.findByIdAndUpdate({_id:id},body,function(err,result) {
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