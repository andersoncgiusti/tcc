const Paciente = require('../models/paciente.model')
const ObjectID = require('mongodb').ObjectID

module.exports = { 
    pacienteGet: async (req, res) => {  
        try {
            const pacientes = await Paciente.find()
            res.json(pacientes)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }  
    },
    pacienteGetId: async (req, res, next) => {
        try {
            const paciente = await Paciente.findById(req.params.id)
            res.json(paciente)
            if (paciente == null) {
                return res.status(404).json({ message: 'Paciente not found!' })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }  
        next()        
    },
    pacientePost: async (req, res) => {  
        const paciente = new Paciente({
            patientName: req.body.patientName,
            patientAge: req.body.patientAge,
            patientCpf: req.body.patientCpf,
            patientAddress: req.body.patientAddress,
            patientNumber: req.body.patientNumber,
            patientComplement: req.body.patientComplement,
            patientCity: req.body.patientCity,
            patientState: req.body.patientState
        })

        try {
            const newPaciente = await paciente.save()
            res.status(201).json(newPaciente)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }  
    },
    pacientePatchId: async (req, res, next) => {
        try {
            const updatePaciente = await Paciente.findByIdAndUpdate(req.params.id, {
                patientName: req.body.patientName,
                patientAge: req.body.patientAge,
                patientCpf: req.body.patientCpf,
                patientAddress: req.body.patientAddress,
                patientNumber: req.body.patientNumber,
                patientComplement: req.body.patientComplement,
                patientCity: req.body.patientCity,
                patientState: req.body.patientState
            })
            res.status(200).json({ message: 'Paciente was updated' })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }  
        next()
    },
    pacienteDeleteId: async (req, res, next) => {
        try {
            paciente = await Paciente.findByIdAndDelete(req.params.id)
            if (paciente !== null) {
                return res.status(200).json({ message: 'Paciente was deleted' })
            } else {
                return res.status(404).json({ message: 'Paciente ID does not exist to be deleted' })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }  
        next()
    }
}