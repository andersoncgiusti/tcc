const express = require('express')
const router = express.Router()

const pacienteController = require('../controllers/paciente.controller')

router.get('/api/paciente', pacienteController.pacienteGet)
router.get('/api/paciente/:id', pacienteController.pacienteGetId)
router.post('/api/paciente', pacienteController.pacientePost)
router.patch('/api/paciente/:id', pacienteController.pacientePatchId)
router.delete('/api/paciente/:id', pacienteController.pacienteDeleteId)

module.exports = router