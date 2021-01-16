import s from './Form.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import { addContactR } from '../../redux/phonebook/phonebook-actions';
import { useSelector, useDispatch } from 'react-redux';

export default function Form(/*{ onSubmit }*/) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const addContact = newContact => dispatch(addContactR(newContact));

  const handleSubmit = e => {
    e.preventDefault();

    if (name.length > 0 && phoneNumber.length > 0) {
      if (
        contacts.some(contact => {
          return contact.name.includes(name);
        })
      ) {
        return alert(`${name} is already in contacts`);
      }
      addContact({
        id: uuidv4(),
        name,
        phoneNumber,
      });
      resetForm();
    }
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span>Name</span>
        <input
          type="text"
          className={s.input}
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
      </label>
      <label className={s.label}>
        <span>Phone number</span>
        <input
          type="text"
          className={s.input}
          value={phoneNumber}
          onChange={e => {
            setPhoneNumber(e.target.value);
          }}
        />
      </label>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );

  function resetForm() {
    setName('');
    setPhoneNumber('');
  }
}
