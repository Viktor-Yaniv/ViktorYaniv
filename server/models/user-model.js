const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    isActivated: {type: Boolean, default: false},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},

    activationLink: {type: String},

})

module.exports = model('User', UserSchema);