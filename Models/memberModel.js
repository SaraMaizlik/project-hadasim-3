const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    firstName: {type: String, require,},
    lastName: {type: String, require,},
}) 

module.exports = mongoose.model("Member", memberSchema)
