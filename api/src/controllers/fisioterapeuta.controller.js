const Fisioterapeuta = require('../models/fisioterapeuta.model')
const ObjectID = require('mongodb').ObjectID

module.exports = { 
    fisioterapeutaGet: async (req, res) => {  
        try {
            const fisioterapeutas = await Fisioterapeuta.find()
            res.json(fisioterapeutas)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }  
    },
    fisioterapeutaGetId: async (req, res, next) => {
        try {
            const fisioterapeuta = await Fisioterapeuta.findById(req.params.id)
            res.json(fisioterapeuta)
            if (fisioterapeuta == null) {
                return res.status(404).json({ message: 'Fisioterapeuta not found!' })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }  
        next()        
    },
    fisioterapeutaPost: async (req, res) => {  
        const fisioterapeuta = new Fisioterapeuta({
            physiotherapistName: req.body.physiotherapistName,
            physiotherapistAge: req.body.physiotherapistAge,
            physiotherapistCpf: req.body.physiotherapistCpf,
            physiotherapistAddress: req.body.physiotherapistAddress,
            physiotherapistNumber: req.body.physiotherapistNumber,
            physiotherapistComplement: req.body.physiotherapistComplement,
            physiotherapistCity: req.body.physiotherapistCity,
            physiotherapistState: req.body.physiotherapistState
        })

        try {
            const newFisioterapeuta = await fisioterapeuta.save()
            res.status(201).json(newFisioterapeuta)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }  
    },
    fisioterapeutaPatchId: async (req, res, next) => {
        try {
            const updatefisioterapeuta = await Fisioterapeuta.findByIdAndUpdate(req.params.id, {
                physiotherapistName: req.body.physiotherapistName,
                physiotherapistAge: req.body.physiotherapistAge,
                physiotherapistCpf: req.body.physiotherapistCpf,
                physiotherapistAddress: req.body.physiotherapistAddress,
                physiotherapistNumber: req.body.physiotherapistNumber,
                physiotherapistComplement: req.body.physiotherapistComplement,
                physiotherapistCity: req.body.physiotherapistCity,
                physiotherapistState: req.body.physiotherapistState
            })
            res.status(200).json({ message: 'Fisioterapeuta was updated' })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }  
        next()
    },
    fisioterapeutaDeleteId: async (req, res, next) => {
        try {
            fisioterapeuta = await Fisioterapeuta.findByIdAndDelete(req.params.id)
            if (fisioterapeuta !== null) {
                return res.status(200).json({ message: 'Fisioterapeuta was deleted' })
            } else {
                return res.status(404).json({ message: 'Fisioterapeuta ID does not exist to be deleted' })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }  
        next()
    }
}