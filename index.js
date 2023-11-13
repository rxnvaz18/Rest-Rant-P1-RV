// Require needed modules.

require('dotenv').config()

const express = require('express')

// Initialize the app object.

const app = express()

// code for requiring use of places.js router

// code added in part 3 to define the view engine

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use('/places', require('./controllers/places'))

// Create a homepage route.

// in part 3 we changed res.send to res.render 'home' so that the client can see your homepage layout
app.get('/', (req, res) => {

    res.render('home')}
)    
// This gets sent to the client 
    // (your web browser most likely!)
// Listen for connections.

app.get('*', (req, res) => {
    res.status(404).send("<h1>404 Page</h1>")
})
app.listen(process.env.PORT) 