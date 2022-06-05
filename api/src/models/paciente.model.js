const mongoose = require('mongoose')

const pacienteSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    patientAge: {
        type: Number,
        required: true
    },
    patientCpf: {
        type: Number,
        required: true
    },
    patientAddress: {
        type: String,
        required: true
    },
    patientNumber: {
        type: Number,
        required: true
    },
    patientComplement: {
        type: String,
        required: true
    },
    patientCity: {
        type: String,
        required: true
    },
    patientState: {
        type: String,
        required: true
    },
    treatmentDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Paciente', pacienteSchema)