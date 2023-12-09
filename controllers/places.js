const router = require('express').Router()
const db = require('../models')

// INDEX
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// CREATE
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then((s) => {
    console.log(s)
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})


// SHOW
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then((place) => {
    console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// UPDATE
router.put("/:id", (req, res) => {
  console.log(req.params.id);
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(
      () => {
        res.redirect(`/places/${req.params.id}`);
      })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// EDIT
router.get("/:id/edit", (req, res) => {
    db.Place.findById(req.params.id)
      .then((place) => {
        res.render("places/edit", { place });
      })
      .catch((err) => {
        console.log("err", err);
        res.render("error404");
      });
  });


// DELETE
router.delete("/:id", (req, res) => {
    db.Place.
      findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect("/places");
      })
      .catch((err) => {
        console.log("err", err);
        res.render("error404");
      });
  });


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

