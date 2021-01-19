import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const getContacts = async () => {
  try {
    const contacts = await axios.get('/contacts');
    return contacts;
  } catch (error) {
    throw error;
  }
};
