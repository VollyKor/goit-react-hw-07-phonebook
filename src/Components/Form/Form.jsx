import s from './Form.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { phonebookSelectors } from 'redux/phonebook';
import { useSelector, useDispatch } from 'react-redux';
import { request } from 'service';
import { phonebookOperations } from 'redux/phonebook';

export default function Form(/*{ onSubmit }*/) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const contacts = useSelector(phonebookSelectors.getContacts);
  const dispatch = useDispatch();

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

      const response = async () => {
        const response = await request.addContact({
          id: uuidv4(),
          name,
          phoneNumber,
        });
        if (response.status === 201) {
          dispatch(phonebookOperations.fetchContacts());
          resetForm();
        } else {
          alert('someting goes wrong');
        }
        return response;
      };
      response();
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
