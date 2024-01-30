const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'data', 'contacts.json');

const readContactsFromFile = () => {
  try {
    const fileContent = fs.readFileSync(dataFilePath);
    return JSON.parse(fileContent);
  } catch (error) {
    return [];
  }
};

const writeContactsToFile = (contacts) => {
  const data = JSON.stringify(contacts, null, 2);
  fs.writeFileSync(dataFilePath, data);
};

module.exports = {
  getAllContacts: () => {
    return readContactsFromFile();
  },

  addContact: (contact) => {
    const contacts = readContactsFromFile();
    contacts.push(contact);
    writeContactsToFile(contacts);
  },
};