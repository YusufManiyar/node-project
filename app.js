const express = require('express')
const bodyParser = require('body-parser')
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')


const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',adminRouter)
app.use('/shop',shopRouter)

app.use((req, res, next) => {
    res.status(400).send('<h1>page not found</h1>')
})

app.listen(4000)