const {hideBin} = require("yargs/helpers");
const operations = require('./contacts');
const argv = require('yargs').argv;
const arr = hideBin(process.argv);


const invokeAction = async({ action, id, name, email, phone }) =>{
  switch (action) {
    case 'list':
       console.log(await  operations.listContacts());
      break;

    case 'get':
       const contact = await operations.getContactById(id);
       if (!contact) {throw new Error(`Contact with id= ${id}  doesn't exist`);}
       console.log(contact);
      break;

    case 'add':
      await operations.addContact(name, email, phone);
      break;

    case 'remove':
      const removeContact=operations.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
