const express = require('express')
const path = require('path')
const rootDir = require('../utils/path.js')

const router = express.Router()

router.get('/',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-form.html') )
})

module.exports = router