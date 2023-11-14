const router = require('express').Router()
// more code to be added

router.get('/', (req, res) => {
    let places = [{
        name: 'Savory Haven',
        city: 'Salt Lake City',
        state: 'UT',
        cuisines: 'Chinese',
        pic: 'http://placekitten.com/250/250'
      }, 
      {
        name: 'Urban Spice Grill',
        city: 'Los Angeles',
        state: 'CA',
        cuisines: 'Burgers and Hot Dogs',
        pic: 'http://placekitten.com/250/250'
      },
      {
        name: 'Culinary Oasis',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Plant-Based Mediterranean',
        pic: 'http://placekitten.com/250/250'
      },
      {
        name: 'Fusion Bites Lounge',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Korean/Mexican Fusion',
        pic: 'http://placekitten.com/250/250'
      },
      {
        name: 'Tantalizing Tastes Tavern',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'English/Indian Fusion',
        pic: 'http://placekitten.com/250/250'
      }
    ]
      
    res.render('places/index', {places})
})

module.exports = router