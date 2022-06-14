const Agendamento = require('../models/agendamento.model')
const ObjectID = require('mongodb').ObjectID

module.exports = { 
    agendamentoGet: async (req, res) => {  
        try {
            const agendamentos = await Agendamento.find().populate('userName')
            res.json(agendamentos)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }  
    },
    agendamentoGetId: async (req, res, next) => {
        try {
            const agendamento = await Agendamento.findById(req.params.id).populate('userName')
            res.json(agendamento)
            if (agendamento == null) {
                return res.status(404).json({ message: 'Agenda not found!' })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }  
        next()        
    },
    agendamentoPost: async (req, res) => {          
        try {
            const newAgendamento = await Agendamento.create({...req.body, userName: req.userId})
            res.status(201).json(newAgendamento)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }  
    },
    agendamentoPatchId: async (req, res, next) => { 
        try {
            updateAgendamento = await Agendamento.findByIdAndUpdate(req.params.id, {
                scheduleDatetreatment: req.body.scheduleDatetreatment,
                scheduleTime: req.body.scheduleTime,
                scheduleSession: req.body.scheduleSession
            }, { new: true })
            res.status(200).json({ message: 'Agendamento was updated' })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }  
        next()
    },
    agendamentoDeleteId: async (req, res, next) => {
        try {
            agendamento = await Agendamento.findByIdAndDelete(req.params.id)
            if (agendamento !== null) {
                return res.status(200).json({ message: 'Agendamento was deleted' })
            } else {
                return res.status(404).json({ message: 'Agendamento ID does not exist to be deleted' })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }  
        next()
    }
}