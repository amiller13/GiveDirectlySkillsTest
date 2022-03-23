const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const apiRoutes = require("./api-routes")
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/giveDirectly', { useNewUrlParser: true})

var db = mongoose.connection

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'))

// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running give directlyb on port " + port)
})