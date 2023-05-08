const mongoose = require('mongoose');

const vaccineSchema = mongoose.Schema({
    receivingDate: {type: Date, require},
    manufacturer: {type: String, require}
}) 

module.exports = mongoose.model("Vaccine", vaccineSchema)