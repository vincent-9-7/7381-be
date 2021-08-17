const mongosse = require('mongoose');
const validateEmail = function (email) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailFormat.test(email);
};

const SellerSchema = new mongosse.Schema(
    {
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
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            validate: [validateEmail, 'Please fill a valid email address. '],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 60,
        },
        
},{
        timestamps: true,
});

const SellerTable = mongosse.model('seller-table', SellerSchema);
module.exports = SellerTable;