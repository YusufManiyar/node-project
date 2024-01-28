const rootDir = require('../utils/path.js')
const path = require('path')

module.exports = {
    getContactPage : (req, res, next) => {
        res.sendFile(path.join(rootDir, 'views', 'contact-form.html'))
    },

    sendSuccessMessage : (req, res, next) => {
        console.log(req.body)
        res.redirect('/shop')
    },

}

