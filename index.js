// Require needed modules.

require('dotenv').config()

const express = require('express')

// Initialize the app object.

const app = express()

// code for requiring use of places.js router

// code added in part 3 to define the view engine

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use('/places', require('./controllers/places'))

// Create a homepage route.

// in part 3 we changed res.send to res.render 'home' so that the client can see your homepage layout
app.get('/', (req, res) => {
    res.render('home')}
)    
// This gets sent to the client 
    // (your web browser most likely!)
// Listen for connections.

// in part3 added 404 file under views and changed res.send to res.render to error404 file created
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT) 