const OrderTable = require('../../../model/order');
const ItemTable = require('../../../model/item');
const SellerTable = require('../../../model/seller');
const BuyerTable = require('../../../model/buyer');
const ProductionTable = require('../../../model/production');

//Get all items
exports.index = async (ctx) => {
    const getAllOrderResult = await OrderTable.find({}).populate({path:"sellerDetail",model:SellerTable})
    .populate({path:"buyerDetail",model:BuyerTable}).populate({path:"itemDetail",model:ItemTable});
      if (getAllOrderResult.length > 0) {
        ctx.body = getAllOrderResult;
    } else {
        ctx.status = 404;
        ctx.body = { errors: "There are no orders!"};
    }
 };

 //GET by objectId
exports.show = async (ctx) => {
    const { id } = ctx.params;
    console.log(id);
    const orderInfo = await OrderTable.findById({_id:id}).populate({path:"sellerDetail",model:SellerTable})
    .populate({path:"buyerDetail",model:BuyerTable}).populate({path:"itemDetail",model:ItemTable});
    if(!orderInfo) { 
        ctx.body = `Can't find the order by ID: ${id}`; 
    } else {
        ctx.body = orderInfo;
    }
  };
  
  //POST
  exports.store = async (ctx) => {
    const {body} = ctx.request;
    const item = new OrderTable(body);
    await item
    .save()
    .then(item => {
        ctx.body = item;
    })
    .catch((err) => {
        console.log(err);
        ctx.body=`Error! ${err}`;
    });
    const {orderList} = body;
    console.log("length is " + orderList.length);
    for(const order of orderList) {
      // console.log(Object.keys(order));
      // console.log(Object.values(order));
      
      const id = Object.keys(order);
      const type = Object.values(order)[0][0];
      const num = -Object.values(order)[0][1];
      const table = type === "B-grade" ? ItemTable :ProductionTable;
      // console.log(table);
      table.findByIdAndUpdate({ _id: id },
        {$inc: { quantity: num}},
        { returnOriginal: false },function(err) {
          if (err) {
            ctx.body = {
              message: `ERROR by ${id}` 
            };
            ctx.status = 404;         
            return;
          }
          // console.log(result);
        });
        // ctx.body = `更新成功 by id: ${id}` ; 
        // ctx.body = orderList;
    }

  };

  //update
  exports.updateId = async (ctx) => {
    const {body} = ctx.request;
    const {id} = ctx.params;
    OrderTable.findByIdAndUpdate({_id:id},body,function(err,result) {
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