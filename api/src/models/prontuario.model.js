const mongoose = require('mongoose')

const prontuarioSchema = new mongoose.Schema({
    treatment: {
        type: String,
        required: true
    },
    treatmentDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Prontuario', prontuarioSchema)