import { createAction } from '@reduxjs/toolkit';

// redux toolkit
// =========================
const addContactR = createAction('phonebook/addContact');
const deleteContactR = createAction('phonebook/deleteContact');
const setContactR = createAction('phonebook/setContacts');
const setFilterR = createAction('phonebook/setFilter');

// Async actions
// ==========================
const fetchContactsRequest = createAction('phonebook/fetchBooks/pending');
const fetchContactsSuccess = createAction('phonebook/fetchBooks/fullfilled');
const fetchContactsError = createAction('phonebook/fetchBooks/rejected');

export {
  addContactR,
  deleteContactR,
  setFilterR,
  setContactR,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
};
