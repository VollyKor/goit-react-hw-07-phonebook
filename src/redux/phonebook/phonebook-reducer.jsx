import { createReducer } from '@reduxjs/toolkit';
import {
  addContactR,
  deleteContactR,
  setFilterR,
  setContactR,
} from './phonebook-actions';

const testContacts = [
  { id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26' },
];

const initialState = {
  contacts: testContacts,
  filterQ: '',
};

// redux toolkit
// =============================
const phonebookReducer = createReducer(initialState, {
  [addContactR]: (state, { payload }) => ({
    ...state,
    contacts: [...state.contacts, payload],
  }),
  [deleteContactR]: (state, { payload }) => {
    const newContactsArray = state.contacts.filter(({ id }) => id !== payload);
    return {
      ...state,
      contacts: newContactsArray,
    };
  },
  [setContactR]: (state, { payload }) => ({
    ...state,
    contacts: [...payload],
  }),
  [setFilterR]: (state, { payload }) => ({
    ...state,
    filterQ: payload,
  }),
});

// vanila redux
// ======================================
// const phonebookReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'phonebook/addContact':
//       return {
//         ...state,
//         contacts: [...state.contacts, payload],
//       };

//     case 'phonebook/deleteContact':
//       const newContactsArray = state.contacts.filter(
//         ({ id }) => id !== payload,
//       );
//       return {
//         ...state,
//         contacts: newContactsArray,
//       };
//     case 'phonebook/setContacts':
//       return {
//         ...state,
//         contacts: [...payload],
//       };

//     case 'phonebook/setFilter':
//       return {
//         ...state,
//         filterQ: payload,
//       };
//     default:
//       return state;
//   }
// };

export default phonebookReducer;
