export function deleteContact(contacts, contactId) {
  const parsedContactId = parseInt(contactId, 10);
  const filteredContacts = contacts.filter(
    (contact) => contact.id !== parsedContactId
  );

  return filteredContacts;
}
