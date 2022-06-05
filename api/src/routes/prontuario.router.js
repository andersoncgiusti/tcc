const express = require('express')
const router = express.Router()

const prontuarioController = require('../controllers/prontuario.controller')

router.get('/api/prontuario', prontuarioController.prontuarioGet)
router.get('/api/prontuario/:id', prontuarioController.prontuarioGetId)
router.post('/api/prontuario', prontuarioController.prontuarioPost)
router.patch('/api/prontuario/:id', prontuarioController.prontuarioPatchId)
router.delete('/api/prontuario/:id', prontuarioController.prontuarioDeleteId)

module.exports = router