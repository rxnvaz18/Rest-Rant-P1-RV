// Require needed modules.
require('dotenv').config()
const express = require('express')

// Initialize the app object.
const app = express()

// code for requiring use of places.js router

app.use('/places', require('./controllers/places'))

// Create a homepage route.
app.get('/', (req, res) => {
    // This gets sent to the client 
    // (your web browser most likely!)
    res.send('I Awake')
})
// Listen for connections.
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
app.listen(process.env.PORT) 