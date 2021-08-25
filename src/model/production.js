const mongoose = require('mongoose');
// const SellerTable = mongoose.model('seller-table');

const ProductionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ['fruit','vegetable'],
        },
        price: {
            type: Number,
            min: 0,
            required: true,
        },
        quantity: {
            type: Number,
            min: 0,
            required: true,
        },
        description: {
            type: String,
        },
        address:{
            address1:{
                type: String,
                required: true
            },
            suburb: {
                type: String,
            },
            state: {
                type: String,
                required: true,
            },
            postcode: {
                type: Number,
                min: 1000,
                max: 9999,
            }
        }, 
        sellerDetail:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "seller-Table",
        },
    // -------------------------------------//
        // currentAddress:{
        //     lat: {
        //         type:Number,
        //         default: -33.865143,
        //     },
        //     lng: {
        //         type:Number,
        //         default: 151.209900,
        //     }
        // },
    // -------------------------------------//
        // 🌟 是否考虑上架时间和下架时间？？？？
        // startTime: {
        //     //Date+time
        //     type: Date,            
        // },
        // endTime: {
        //     //Date+time
            // type: Date, 
        // },
    // -------------------------------------//
        // 照片
        // imageDetail:[{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "imageTable",
        // }],
    },
    {
        timestamps: true,
});


const ProductionTable = mongoose.model('production-table', ProductionSchema);

module.exports = ProductionTable;
