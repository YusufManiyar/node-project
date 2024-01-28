const express = require('express')
const shopController = require('../controller/shop.js')
const router = express.Router()

router.get('/', shopController.getAddShopPage)

module.exports = router