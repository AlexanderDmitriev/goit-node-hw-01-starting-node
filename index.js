const operations = require("./contacts");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      console.log(await operations.listContacts());
      break;

    case "get":
      const contact = await operations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id= ${id}  doesn't exist`);
      }
      console.log(contact);
      break;

    case "add":
      const pushingContact = await operations.addContact(name, email, phone);
      console.log(pushingContact);
      break;

    case "remove":
      const removeContact = await operations.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
