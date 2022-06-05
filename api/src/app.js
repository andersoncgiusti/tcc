const express = require('express')
const app = express()

//imports routes
const statusRouter = require('./routes/status.router')
const agendaRouter = require('./routes/agenda.router')
const prontuarioRouter = require('./routes/prontuario.router')

app.use(express.urlencoded({ extended: false })) 
app.use(express.json()) 

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    )
    next()
})

app.use(statusRouter)
app.use(agendaRouter)
app.use(prontuarioRouter)

module.exports = app