export function saveContact(contacts, contact) {
  if (contact.id) {
    const index = contacts.findIndex((c) => c.id === parseInt(contact.id, 10));
    contact.id = parseInt(contact.id, 10);
    contacts[index] = contact;
  }
  const nextId = Math.max(...contacts.map((c) => c.id)) + 1;
  contact.id = nextId;
  contacts.push(contact);
}
