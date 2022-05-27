const express = require('express')
const router = express.Router()

const statusController = require('../controllers/status.controller')

router.get('/status' , statusController.status )

module.exports = router