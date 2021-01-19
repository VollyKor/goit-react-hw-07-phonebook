import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './phonebook-actions';
import { getContacts } from '../../service/request';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const contacts = await getContacts();
    dispatch(fetchContactsSuccess(contacts.data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};
