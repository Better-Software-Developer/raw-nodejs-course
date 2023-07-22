export function saveContact(contacts, contact) {
  if (contact.id) {
    const index = contacts.findIndex((c) => c.id === parseInt(contact.id, 10));
    contact.id = parseInt(contact.id, 10);
    if (!contact.file) {
      delete contact.file;
    }
    contacts[index] = { ...contacts[index], ...contact };
  } else {
    const nextId = Math.max(...contacts.map((c) => c.id)) + 1;
    contact.id = nextId;
    contacts.push(contact);
  }
}
