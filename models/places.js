const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String, default: 'http://placekitten.com/350/350'},
  cuisine: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {type: Number, 
    min: [1673, 'Surely not that old?!'], 
    max:[new Date().getFullYear(), 'Hey this year is in the future!']},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref:'Comment' }]
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}


module.exports = mongoose.model('Place', placeSchema)



//Rest-Rant Part 8 had you delete all of this to be replaced with mongo
//  module.exports = [{
//     name: 'Savory Haven',
//     city: 'Salt Lake City',
//     state: 'UT',
//     cuisines: 'Chinese',
//     pic: './images/chinese.jpg'
//   }, 
//   {
//     name: 'Urban Spice Grill',
//     city: 'Los Angeles',
//     state: 'CA',
//     cuisines: 'Burgers and Hot Dogs',
//     pic: './images/burgers.jpg'
//   },
//   {
//     name: 'Culinary Oasis',
//     city: 'Las Vegas',
//     state: 'NV',
//     cuisines: 'Plant-Based Mediterranean',
//     pic: './images/medlounge.jpg'
//   },
//   {
//     name: 'Fusion Bites Lounge',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Korean/Mexican Fusion',
//     pic: './images/kmex.jpg'
//   },
//   {
//     name: 'Tantalizing Tastes Tavern',
//     city: 'San Diego',
//     state: 'CA',
//     cuisines: 'English/Indian Fusion',
//     pic: './images/pub.jpg'
//   }
// ]