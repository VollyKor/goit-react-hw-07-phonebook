import './App.module.css';
import React, { useState, useEffect } from 'react';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  addContactR,
  deleteContactR,
  setFilterR,
  setContactR,
} from './redux/phonebook/phonebook-actions';

// For id gen
// import { v4 as uuidv4 } from 'uuid';
// uuidv4();

// test Contacts for hooks
// const testContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26' },
// ];

function App(props) {
  //  redux toolkit
  // ===========================
  const contacts = useSelector(state => state.phonebook.contacts);
  const filterQ = useSelector(state => state.phonebook.filterQ);
  const dispatch = useDispatch();

  const addContact = newContact => dispatch(addContactR(newContact));
  const deleteContact = contactId => dispatch(deleteContactR(contactId));
  const setContacts = contactsArr => dispatch(setContactR(contactsArr));
  const setFilter = value => dispatch(setFilterR(value));

  //  vanila redux
  // ==============================
  // const {
  // contacts,
  // filterQ,
  // onAddContact,
  // onDeleteContact,
  // onSetFilter,
  // onSetContacts,
  // } = props;

  // Hooks
  // const [contacts, setContacts] = useState(() => [...testContacts]);
  // const [filterQuery, setFilter] = useState('');

  // get items from ls on first render
  useEffect(() => {
    if (localStorage.getItem('contacts') !== null) {
      const data = JSON.parse(localStorage.getItem('contacts'));
      setContacts(data);
    }
  }, []);

  // add items to ls
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = newContact => {
    if (
      contacts.some(({ name }) => {
        return name.includes(newContact.name);
      })
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    addContact(newContact);
  };

  const visibleContacts = () => {
    const filtered = filterQ.toLowerCase();
    const filteredArr = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filtered),
    );
    return filteredArr;
  };

  const removeContact = idToRemove => {
    // for hooks
    // const newContactsArray = contacts.filter(({ id }) => id !== idToRemove);
    deleteContact(idToRemove);
  };

  return (
    <main className="container">
      <h1>Phone Book</h1>
      <Form onSubmit={handleSubmit} />
      <h2>Contact List</h2>
      <Filter data={{ contacts, filterQ }} setFilter={setFilter} />
      <ContactList
        ContactList={visibleContacts()}
        removeContact={removeContact}
      />
    </main>
  );
}

// vanila redux
// ====================
// const mapStateToProps = state => ({
//   contacts: state.phonebook.contacts,
//   filterQ: state.phonebook.filterQ,
//   state,
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddContact: newContact => dispatch(addContactR(newContact)),
//     onDeleteContact: contactId => dispatch(deleteContactR(contactId)),
//     onSetFilter: value => dispatch(setFilterR(value)),
//     onSetContacts: contactArr => dispatch(setContactR(contactArr)),
//   };
// };

export default /* connect(mapStateToProps, mapDispatchToProps) */ App;
