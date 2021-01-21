import { createAction } from '@reduxjs/toolkit';

// redux toolkit
// =========================
export const addContactR = createAction('phonebook/addContact');
export const deleteContactR = createAction('phonebook/deleteContact');
export const setContactR = createAction('phonebook/setContacts');
export const setFilterR = createAction('phonebook/setFilter');

// Async actions
// ==========================
// export const fetchContactsRequest = createAction(
//   'phonebook/fetchBooks/pending',
// );
// export const fetchContactsSuccess = createAction(
//   'phonebook/fetchBooks/fullfilled',
// );
// export const fetchContactsError = createAction('phonebook/fetchBooks/rejected');
