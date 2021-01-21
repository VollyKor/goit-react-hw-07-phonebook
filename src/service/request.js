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

export const addContact = async contactObj => {
  try {
    const response = await axios.post('/contacts', contactObj);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = async ObjId => {
  try {
    const response = await axios.delete(`/contacts/${ObjId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
