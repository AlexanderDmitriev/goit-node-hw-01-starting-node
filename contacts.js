const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  return JSON.parse(await fs.readFile(contactsPath));
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  if (!result) return null;
  return result;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.getContactById((contact) => contact.id === contactId);
  if (index ===-1) {return null;}
  const [removingContact]=contacts.splice(index,1);
  await fs.writeFile(contactsPath,JSON.stringify(contacts));
  return removingContact;
}

const addContact = async (name, email, phone) => {
  const data = {
    id: uuidv4(),
    name,
    email,
    phone,
  };
  const contacts = await listContacts();
  contacts.push(data);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
};
