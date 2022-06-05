const Prontuario = require('../models/prontuario.model')
const ObjectID = require('mongodb').ObjectID

module.exports = { 

    prontuarioGet: async (req, res) => {  
        try {
            const prontuarios = await Prontuario.find()
            res.json(prontuarios)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }  
    },
    prontuarioGetId: async (req, res, next) => {
        try {
            const prontuario = await Prontuario.findById(req.params.id)
            res.json(prontuario)
            if (prontuario == null) {
                return res.status(404).json({ message: 'Prontuario not found!' })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }  
        next()        
    },
    prontuarioPost: async (req, res) => {  
        const prontuario = new Prontuario({
            treatment: req.body.treatment
        })

        try {
            const newProntuario = await prontuario.save()
            res.status(201).json(newProntuario)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }  
    },
    prontuarioPatchId: async (req, res, next) => { 
        try {
            const updateProntuario = await Prontuario.findByIdAndUpdate(req.params.id, {
                treatment: req.body.treatment
            })
            res.status(200).json({ message: 'Prontuario was updated' })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }  
        next()
    },
    prontuarioDeleteId: async (req, res, next) => {
        try {
            prontuario = await Prontuario.findByIdAndDelete(req.params.id)
            if (prontuario !== null) {
                return res.status(200).json({ message: 'Prontuario was deleted' })
            } else {
                return res.status(404).json({ message: 'Prontuario ID does not exist to be deleted' })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }  
        next()
    }
}

