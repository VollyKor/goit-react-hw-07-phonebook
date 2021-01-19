import './App.module.css';
import React, { useEffect } from 'react';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsOperations from './redux/phonebook/phonebook-operations';
import { setContactR } from './redux/phonebook/phonebook-actions';
import { getContacts } from './redux/phonebook/phonebook-selectors';

function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const setContacts = contactsArr => dispatch(setContactR(contactsArr));

  // get items from ls on first render
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
    // if (localStorage.getItem('contacts') !== null) {
    //   const data = JSON.parse(localStorage.getItem('contacts'));
    //   setContacts(data);
    // }
  }, [dispatch]);

  // useEffect(() => {
  //   setContacts(getContactsFromDB());
  // }, []);

  // add items to ls
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <main className="container">
      <h1>Phone Book</h1>
      <Form />
      <h2>Contact List</h2>
      <Filter />
      <ContactList />
    </main>
  );
}

export default App;
