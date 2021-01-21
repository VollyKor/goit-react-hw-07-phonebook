import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookSelectors } from 'redux/phonebook';
import { request } from 'service';
import { phonebookOperations } from 'redux/phonebook';

export default function ContactList() {
  const { getVisibleContacts } = phonebookSelectors;

  const visibleContatcs = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const deleteContact = async contactId => {
    const response = await request.deleteContact(contactId);
    if (response.status === 200) {
      dispatch(phonebookOperations.fetchContacts());
    } else {
      alert('something goes wrong');
    }
    return response;
  };

  return (
    <div className="container">
      <ul className={s.list}>
        {visibleContatcs.map(el => {
          return (
            <li className={s.item} key={el.id}>
              <p className={s.itemValue}>
                <span> {el.name}: </span>
                <span>{el.phoneNumber}</span>
              </p>
              <button className={s.btn} onClick={() => deleteContact(el.id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
