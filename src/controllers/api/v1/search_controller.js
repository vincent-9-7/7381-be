const ProductionTable = require('../../../model/production');
// const ItemTable = require('../../../model/item');


exports.getItem = async (ctx) => {
    const {name} = ctx.query;  
    const result= await ProductionTable.aggregate([
      { $unionWith: { coll: "item-tables", pipeline:[ { $project: { title: 1, _id: 1 } } ]}},
      {$match: {title: { $regex: name, $options: 'g' }
    }},
    ]);
      if(result.length<=0){
        ctx.body ="No items",
        ctx.status=404;
      }else{
        ctx.body = result;
      }
    };

