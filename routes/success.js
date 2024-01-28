const express = require('express')
const contactController = require('../controller/contact.js')

const router = express.Router()

router.get('/',contactController.sendSuccessMessage)

module.exports = router