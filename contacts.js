const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  return JSON.parse(await fs.readFile(contactsPath));
};

const getContactById = async (contactId) => {
  const products =  await listContacts();
  const result = products.find(contact => contact.id===contactId);
  if (!result) return null;
  return result;
}

function removeContact(contactId) {
  // ...твой код
}

const addContact = async (name, email, phone) => {
  const data = {
    id: "0",
    name,
    email,
    phone,
  };
  fs.appendFile(contactsPath, data);
};
