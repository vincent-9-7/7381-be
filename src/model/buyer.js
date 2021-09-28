const mongosse = require('mongoose');
const validateEmail = function (email) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailFormat.test(email);
};

const BuyerSchema = new mongosse.Schema(
    {
        // name: {
        //     firstName: {
        //         type: String,
        //         required: true,
        //         trim: true,
        //         default: 'First Name'
        //     },
        //     lastName: {
        //         type: String,
        //         required: true,
        //         trim: true,
        //         default: 'Last Name'
        //     }
        // },
        username: {
            type: String,
            required: true,
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
        address1: {
            type: String,
            required: true,
        },
        address2: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        postcode: {
            type: Number,
            max: 9999,
            min: 0,
        }

    }, {
    timestamps: true,
});

const BuyerTable = mongosse.model('buyer-table', BuyerSchema);
module.exports = BuyerTable;