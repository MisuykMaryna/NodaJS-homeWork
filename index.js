
const contacts = require("./contacts");
const argv = require('yargs').argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
          const listContacts = await contacts.listContacts();
          return console.table(listContacts);
      case 'get':
          const oneContact = await contacts.getContactById(id);
          return console.table(oneContact);
      case 'add':
          const newContact = await contacts.addContact({ name, email, phone });
          return console.table(newContact);
      case 'updateById':
          const updateContact = await contacts.updateById(id, { name, email, phone });
          return console.table(updateContact);
      case 'remove':
          const removeContact = await contacts.removeContact(id);
          return console.table(removeContact); 
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);