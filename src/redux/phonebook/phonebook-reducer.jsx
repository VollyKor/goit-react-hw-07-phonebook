import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { fetchContacts } from './phonebook-operations';
import { phonebookActions } from 'redux/phonebook';

const {
  addContactR,
  deleteContactR,
  setFilterR,
  setContactR,
} = phonebookActions;

//  use json-server
const contactsReducer = createReducer([], {
  [addContactR]: (state, { payload }) => [...state, payload],

  [deleteContactR]: (state, { payload }) => {
    const newContactsArray = state.filter(({ id }) => id !== payload);
    return newContactsArray;
  },

  [setContactR]: (_, { payload }) => payload,
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [setFilterR]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const errorMessage = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload.message,
});

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filterQ: filterReducer,
  isLoading,
  error: errorMessage,
});

export default phonebookReducer;
