const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    firstName: {type: String, require},
    lastName: {type: String, require},
    personalID: {type: String, require, unique: true},
    address: {type: mongoose.Schema.Types.ObjectId,ref:'Address', require},
    birthDate: {type: Date, require},
    phone: {type: String, require,},
    cellPhone: {type: String, require,},
    vaccine: [{type: mongoose.Schema.Types.ObjectId,ref:'Vaccine'}],
    positiveAndRecoveryDate: [{type: Date}],
}) 

module.exports = mongoose.model("Member", memberSchema)
