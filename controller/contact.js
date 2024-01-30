const rootDir = require('../utils/path.js')
const path = require('path')
const contactsModel = require('../model/contacts.js')

module.exports = {
    getContactPage : (req, res, next) => {
        res.sendFile(path.join(rootDir, 'view', 'contact-form.html'))
    },

    sendSuccessMessage : (req, res, next) => {
        console.log(req.body)
        const { firstname, lastname, phone, email } = req.body;
        const newContact = { firstname, lastname, phone, email };
        contactsModel.addContact(newContact);
        res.redirect('/')
    },

}

