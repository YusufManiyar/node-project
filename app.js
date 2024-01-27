const express = require('express')
const bodyParser = require('body-parser')
const adminRouter = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')
const contactRouter = require('./routes/contact.js')
const successRouter = require('./routes/success.js')
const rootDir = require('./utils/path.js')
const path = require('path')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRouter)
app.use('/shop',shopRouter)
app.use('/contact',contactRouter)
app.use('/success',successRouter)


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(4000)