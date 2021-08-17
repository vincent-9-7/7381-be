const ItemTable = require('../../../model/item');
const SellerTable = require('../../../model/seller');

//Get all items
exports.index = async (ctx) => {
    const getAllItemResult = await ItemTable.find({}).populate({path:"sellerDetail",model:SellerTable});
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
    const buyerInfo = await ItemTable.findById({_id:id}).populate({path:"sellerDetail",model:SellerTable});
    if(!buyerInfo) { 
        ctx.body = `Can't find the buyer by ID: ${id}`; 
    } else {
        ctx.body = buyerInfo;
    }
  };
  
  //POST
  exports.store = async (ctx) => {
    const {body} = ctx.request;  
    const item = new ItemTable(body);
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
    ItemTable.findByIdAndUpdate({_id:id},body,function(err,result) {
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