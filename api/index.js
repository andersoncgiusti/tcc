const express = require('express')
const app = express()
const database = require('./model/db')
const port = 3000

app.use(express.urlencoded({ extended: false })) 
app.use(express.json()) 

//conection with database
database.authenticate().then(() => {
    console.log("Successfully connected to database")
}).catch(err => {
    console.log(err)
})

app.get('/', (req, res) => res.send('Hello World!'))

//server
app.listen(port, (err) => {
    if (err) {
        console.log('No server')
    } else {
        console.log('Server online url http://localhost:3000/')
    }
})