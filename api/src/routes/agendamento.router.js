const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth')

router.use(authMiddleware)

const agendamentoController = require('../controllers/agendamento.controller')

router.get('/api/agendamento' , agendamentoController.agendamentoGet, authMiddleware)
router.get('/api/agendamento/:id', agendamentoController.agendamentoGetId, authMiddleware)
router.post('/api/agendamento', agendamentoController.agendamentoPost, authMiddleware)
router.patch('/api/agendamento/:id', agendamentoController.agendamentoPatchId, authMiddleware)
router.delete('/api/agendamento/:id', agendamentoController.agendamentoDeleteId, authMiddleware)

module.exports = router