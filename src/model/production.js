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
            enum: ['Fruit','Vegetable'],
        },
        price: {
            type: Number,
            min: 0,
            required: true,
        },
        condition: {
            type:String,
            default: "Processed"
        },
        postQuantity: {
            type: Number,
        },
        quantity: {
            type: Number,
            min: 0,
            required: true,
        },
        size:{
            type: Number,
            min: 0,
            required: true,
        },
        description: {
            type: String,
        },
        address1:{
            type: String,
            required: true
        },
        address2:{
            type: String,
            // required: true
        },
        suburb: {
            type: String,
        },
        city: {
            type:String,
        },
        state: {
            type: String,
            required: true,
        },
        postcode: {
            type: Number,
            min: 1000,
            max: 9999,
        },
        sellerDetail:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "seller-Table",
        },
        imageAddress:{
            type:Array,
        },
        recipient:{
            type: String,
            required: true,
        },
        bankName:{
            type: String,
            required: true,
        },
        BSB:{
            type: Number,
        },
        account:{
            type: Number,
        },
        latitude:{
            type: Number,
        },
        longitude:{
            type: Number,
        }
        
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
        // ???? ???????????????????????????????????????????????????
        // startTime: {
        //     //Date+time
        //     type: Date,            
        // },
        // endTime: {
        //     //Date+time
            // type: Date, 
        // },
    // -------------------------------------//
        // ??????
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
