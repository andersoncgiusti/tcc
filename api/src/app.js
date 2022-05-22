const express = require('express')
const app = express()
const database = require('../src/models/db')
const port = 3000

//imports routes
const statusRouter = require('./routes/status.route')

//conection with database
database.authenticate().then(() => {
    console.log("Successfully connected to database")
}).catch(err => {
    console.log(err)
})

app.use(express.urlencoded({ extended: false })) 
app.use(express.json()) 
app.use(statusRouter)



//server
app.listen(port, (err) => {
    if (err) {
        console.log('No server')
    } else {
        console.log('Server online url http://localhost:3000/')
    }
})