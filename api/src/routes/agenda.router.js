const express = require('express')
const router = express.Router()

const agendaController = require('../controllers/agenda.controller')

router.get('/api/agenda' , agendaController.agendaGet)

module.exports = router