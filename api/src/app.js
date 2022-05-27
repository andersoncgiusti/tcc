const express = require('express')
const app = express()

//imports routes
const statusRouter = require('./routes/status.router')
const agendaRouter = require('./routes/agenda.router')

app.use(express.urlencoded({ extended: false })) 
app.use(express.json()) 
app.use(statusRouter)
app.use(agendaRouter)

module.exports = app