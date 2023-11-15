const router = require('express').Router()
// more code to be added

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'Savory Haven',
        city: 'Salt Lake City',
        state: 'UT',
        cuisines: 'Chinese',
        pic: './images/chinese.jpg'
      }, 
      {
        name: 'Urban Spice Grill',
        city: 'Los Angeles',
        state: 'CA',
        cuisines: 'Burgers and Hot Dogs',
        pic: './images/burgers.jpg'
      },
      {
        name: 'Culinary Oasis',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Plant-Based Mediterranean',
        pic: './images/medlounge.jpg'
      },
      {
        name: 'Fusion Bites Lounge',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Korean/Mexican Fusion',
        pic: './images/kmex.jpg'
      },
      {
        name: 'Tantalizing Tastes Tavern',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'English/Indian Fusion',
        pic: './images/pub.jpg'
      }
    ]
      
    res.render('places/index', {places})
})

module.exports = router