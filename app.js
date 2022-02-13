
const express = require('express')
const app = express()
//const songs = require('./routes/routes')
const lists = require('./routes/routes')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes

app.use('/grm/demo/lists', lists)

const port = 4000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`)) 
    } catch (error) {
        console.log(error)
    }
}

start()