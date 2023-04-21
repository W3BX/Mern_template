const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
    res.cookie('SampleCookie', 'cookieValue', { httpOnly: true }).send('Cookie set');
})


module.exports = router
