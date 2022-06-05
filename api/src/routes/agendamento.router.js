const express = require('express')
const router = express.Router()

const agendamentoController = require('../controllers/agendamento.controller')

router.get('/api/agendamento' , agendamentoController.agendamentoGet)
router.get('/api/agendamento/:id', agendamentoController.agendamentoGetId)
router.post('/api/agendamento', agendamentoController.agendamentoPost)
router.patch('/api/agendamento/:id', agendamentoController.agendamentoPatchId)
router.delete('/api/agendamento/:id', agendamentoController.agendamentoDeleteId)

module.exports = router