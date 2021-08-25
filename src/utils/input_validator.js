const Validator = require('validator');
const isEmpty = require('./is_empty_validator');

function inputValidator(data) {
    let errors = {};
    // validate email or password is empty
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    //validate email format
    if (!Validator.isEmail(data.email)) {
        errors.error= "The email can not be empty";
    }
    //validate the length of password
    if (!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.error = "The length of password should be more than 6 and less than 30!";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}

module.exports = {inputValidator};