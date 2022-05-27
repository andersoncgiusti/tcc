require('dotenv').config()
const http = require('http')
const app = require('./src/app')
const database = require('./src/models/db')

const port = 3000
const server = http.createServer(app)

//conection with database
database.authenticate().then(() => {
    console.log("Successfully connected to database MySQL")
}).catch(err => {
    console.log(err)
})

//server
server.listen(port, (err) => {
    if (err) {
        console.log('No server')
    } else {
        console.log('Server online url http://localhost:'+`${port}`+'/')
    }
})