import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addContactR,
  deleteContactR,
  setFilterR,
  setContactR,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './phonebook-actions';

import { getContacts } from '../../service/request';

const testContacts = [
  // { id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26' },
];

//  use json-server
const contactsReducer = createReducer([], {
  [addContactR]: (state, { payload }) => [...state, payload],

  [deleteContactR]: (state, { payload }) => {
    const newContactsArray = state.filter(({ id }) => id !== payload);
    return newContactsArray;
  },

  [setContactR]: (_, { payload }) => payload,
  [fetchContactsSuccess]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [setFilterR]: (state, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const errorMessage = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload.message,
});

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filterQ: filterReducer,
  isLoading,
  error: errorMessage,
});

export default phonebookReducer;
