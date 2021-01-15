import {
  // configureStore,
  createStore,
  // getDefaultMiddleware,
} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import { phonebookReducer } from './phonebook/phonebook-reducer';

// const middleware = [...getDefaultMiddleware(), logger];

// const store = configureStore({
//   reducer: {
//     phonebook: phonebookReducer,
//   },
//   devTools: process.env.NODE_ENV === 'development',
//   middleware,
// });
// export default store;

const testContacts = [
  { id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26' },
];

const initialState = {
  phonebook: {
    contacts: testContacts,
    filterQ: '',
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'phonebook/addContact':
      return {
        ...state,
        phonebook: {
          ...state.phonebook,
          contacts: [...state.phonebook.contacts, payload],
        },
      };

    case 'phonebook/deleteContact':
      const newContactsArray = state.phonebook.contacts.filter(
        ({ id }) => id !== payload,
      );
      return {
        ...state,
        phonebook: {
          ...state.phonebook,
          contacts: newContactsArray,
        },
      };
    case 'phonebook/setContacts':
      return {
        ...state,
        phonebook: {
          ...state.phonebook,
          contacts: [...payload],
        },
      };

    case 'phonebook/setFilter':
      return {
        ...state,
        phonebook: {
          ...state.phonebook,
          filterQ: payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
