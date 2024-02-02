const express = require('express')
const bodyParser = require('body-parser')
const adminRouter = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')
const contactRouter = require('./routes/contact.js')
const successRouter = require('./routes/success.js')
const cartRouter = require('./routes/cart.js')
const errorController = require('./controller/error.js')
const db = require('./utils/database.js')
const path = require('path')

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));



app.use('/',shopRouter)
app.use('/admin',adminRouter)
app.use('/contact',contactRouter)
app.use('/success',successRouter)
app.use('/cart',cartRouter)

app.use(errorController.pageNotFound)

app.listen(4000)