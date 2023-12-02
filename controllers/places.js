const router = require('express').Router()

const db = require('../models')


router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err=> {
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})


router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})


module.exports = router
// const places = require('../models/places')
// Rest Rant part 8 had you delete the routes and go back to stub routes for mongo
// router.post('/', (req, res) => {
//   if (!req.body.pic) {
//     // setting the default image for when the user does not provide one
//     req.body.pic ="./images/happyeater.jpg"
//   }
//   if(!req.body.city) {
//     req.body.city = "Local Town"
//   }
//   if(!req.body.state) {
//     req.body.state = "USA"
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })

// router.get('/', (req, res) => {
//   res.render('places/index', { places })
// })

// router.get('/new', (req, res) => {
//   res.render('places/new')
// });

// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('places/show', { place: places[id], id })
//   }
// })

// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('places/edit', { place: places[id] })
//   }
// })

// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
//           // Default image if one is not provided
//           req.body.pic = 'http://placekitten.com/400/400'
//       }
//       if (!req.body.city) {
//           req.body.city = 'Anytown'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }

//       // Save the new data into places[id]
//       places[id] = req.body
//       res.redirect(`/places/${id}`)
//   }
// })


// router.delete('/places/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   } else if (!places[id]) {
//       res.render('error404')
//   } else {
//       places.splice(id, 1)
//       res.redirect('/places')
//   }
// })

// router.get('/', (req, res) => {
//     let places = [{
//         name: 'Savory Haven',
//         city: 'Salt Lake City',
//         state: 'UT',
//         cuisines: 'Chinese',
//         pic: './images/chinese.jpg'
//       }, 
//       {
//         name: 'Urban Spice Grill',
//         city: 'Los Angeles',
//         state: 'CA',
//         cuisines: 'Burgers and Hot Dogs',
//         pic: './images/burgers.jpg'
//       },
//       {
//         name: 'Culinary Oasis',
//         city: 'Las Vegas',
//         state: 'NV',
//         cuisines: 'Plant-Based Mediterranean',
//         pic: './images/medlounge.jpg'
//       },
//       {
//         name: 'Fusion Bites Lounge',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Korean/Mexican Fusion',
//         pic: './images/kmex.jpg'
//       },
//       {
//         name: 'Tantalizing Tastes Tavern',
//         city: 'San Diego',
//         state: 'CA',
//         cuisines: 'English/Indian Fusion',
//         pic: './images/pub.jpg'
//       }
//     ]
      
//     res.render('places/index', {places})
// })

