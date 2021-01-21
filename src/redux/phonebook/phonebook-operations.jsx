import { request } from 'service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'phonebook/fetchBooks',
  async () => {
    try {
      const contacts = await request.getContacts();
      return contacts.data;
    } catch (error) {
      throw error;
    }
  },
);

// export const addContact = createAsyncThunk(
//   'phonebook/addContact',
//   async contactObj => {
//     try {
//       const response = await request.addContact(contactObj);
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   },
// );
