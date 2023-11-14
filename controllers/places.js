const router = require('express').Router()
// more code to be added

router.get('/', (req, res) => {
    res.render('places/index')
})

module.exports = router