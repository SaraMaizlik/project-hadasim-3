const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    city: {type: String, require},
    street: {type: String, require},
    houseNumber: {type: Number, require}
}) 

module.exports = mongoose.model("Address", addressSchema)