const router = require('express').Router()
// more code to be added

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router