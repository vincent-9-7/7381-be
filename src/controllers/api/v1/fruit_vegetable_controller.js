// const ItemTable = require('../../../model/item');
const mongoose = require('mongoose');
const ProductionTable = require('../../../model/production');

exports.getAllFruits = async (ctx) => {
    // const {name} = ctx.query;  
    
    const result= await ProductionTable.aggregate([
      { $unionWith: { coll: "item-tables", 
    //   pipeline:[ { $project: { title: 1, _id: 1 } } ]
    }
    },
      {$match: {category: { $regex: "Fruit", $options: 'g' }
    }},
    ]);
      if(result.length<=0){
        ctx.body ="No items",
        ctx.status=404;
      }else{
        ctx.body = result;
      }
    };

    exports.getAllVegetables = async (ctx) => { 
        const result= await ProductionTable.aggregate([
          { $unionWith: { coll: "item-tables", 
        //   pipeline:[ { $project: { title: 1, _id: 1 } } ]
        }
        },
          {$match: {category: { $regex: "Vegetable", $options: 'g' }
        }},
        ]);
          if(result.length<=0){
            ctx.body ="No items",
            ctx.status=404;
          }else{
            ctx.body = result;
          }
        };

        exports.getById = async (ctx) => { 
          const {id} = ctx.params;
          console.log(id);
          const result= await ProductionTable.aggregate([
            { $unionWith: { coll: "item-tables", 
          }},
            {$match: {_id: mongoose.Types.ObjectId(id)}
          },
          ]);
            if(result.length<=0){
              ctx.body ="No items",
              ctx.status=404;
            }else{
              ctx.body = result;
            }
          };