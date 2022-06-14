const mongoose = require('mongoose')

const agendamentoSchema = new mongoose.Schema({
    scheduleDatetreatment: {
        type: String,
        required: true
    },
    scheduleTime: {
        type: String,
        required: true
    },
    scheduleSession: {
        type: Number,
        required: true
    },
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    scheduleDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Agendamento', agendamentoSchema)