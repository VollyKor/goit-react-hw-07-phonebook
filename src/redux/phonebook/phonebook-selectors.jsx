import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filterQ;

// export const getVisibleContacts = state => {
//   const filterQuery = getFilter(state);
//   const filteredArr = getContacts(state).filter(({ name }) =>
//     name.toLowerCase().includes(filterQuery),
//   );
//   return filteredArr;
// };

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterQuery) => {
    const filteredArr = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterQuery),
    );
    return filteredArr;
  },
);
