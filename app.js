const express = require('express')
const bodyParser = require('body-parser')
const adminRouter = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')
const contactRouter = require('./routes/contact.js')
const successRouter = require('./routes/success.js')
const errorController = require('./controller/error.js')
const path = require('path')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRouter)
app.use('/',shopRouter)
app.use('/contact',contactRouter)
app.use('/success',successRouter)

app.use(errorController.pageNotFound)

app.listen(4000)