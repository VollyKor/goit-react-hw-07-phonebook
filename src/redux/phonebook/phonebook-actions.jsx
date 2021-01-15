const addContactR = value => ({
  type: 'phonebook/addContact',
  payload: value,
});

const deleteContactR = contactId => ({
  type: 'phonebook/deleteContact',
  payload: contactId,
});

const setContactR = contactsArr => ({
  type: 'phonebook/setContacts',
  payload: contactsArr,
});

const setFilterR = value => ({
  type: 'phonebook/setFilter',
  payload: value,
});

export { addContactR, deleteContactR, setFilterR, setContactR };
