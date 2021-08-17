const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        quantity: {
            type: Number,
            min: 0,
            required: true,
        },
        price: {
            type: Number,
            min: 0,
            required: true,
        },
        // total price = quantity * price 
        name: {
            firstName: {
                type: String,
                required: true,
                trim: true,
                default: 'First Name'
            },
            lastName: {
                type: String,
                required: true,
                trim: true,
                default: 'Last Name'
            }
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
        phone: {
            type: Number,
            required: true,
        },
        sellerDetail:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "seller-Table",
        },
        buyerDetail:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'buyer-table',
        },
        itemDetail:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'item-table',
        },
        // 疑问？
        payment: {
            type: Boolean,
            required: true,
            default: false,
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
    },
    {
        timestamps: true,
});


const OrderTable = mongoose.model('order-table', OrderSchema);

module.exports = OrderTable;
