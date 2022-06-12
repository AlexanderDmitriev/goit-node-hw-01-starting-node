const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  return JSON.parse(await fs.readFile(contactsPath));
};

const getContactById = async (contactId) => {
  const contact = await listContacts();
  const result = contact.find((contact) => contact.id === contactId);
  if (!result) return null;
  return result;
};

const removeContact = async (contactId) => {
  // ...твой код
}

const addContact = async (name, email, phone) => {
  const data = {
    id: uuidv4(),
    name,
    email,
    phone,
  };
  const contact = await listContacts();
  contact.push(data);
  await fs.writeFile(contactsPath, JSON.stringify(contact));
};
