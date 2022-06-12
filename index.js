//const argv = require('yargs').argv;
const operations = require('./db/index');

const invokeAction = async({ action, id, name, email, phone }) =>{
  switch (action) {
    case 'list':
        const data= await  operations.listContacts();
       console.log(data);
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
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

//invokeAction(argv);
//console.log(idx);