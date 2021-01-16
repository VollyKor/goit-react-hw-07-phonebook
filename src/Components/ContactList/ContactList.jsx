import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactR } from '../../redux/phonebook/phonebook-actions';
import {
  getContacts,
  getFilter,
} from '../../redux/phonebook/phonebook-selectors';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filterQ = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = () => {
    const filtered = filterQ.toLowerCase();
    const filteredArr = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filtered),
    );
    return filteredArr;
  };

  return (
    <div className="container">
      <ul className={s.list}>
        {visibleContacts().map(el => {
          return (
            <li className={s.item} key={el.id}>
              <p className={s.itemValue}>
                <span> {el.name}: </span>
                <span>{el.phoneNumber}</span>
              </p>
              <button
                className={s.btn}
                onClick={() => dispatch(deleteContactR(el.id))}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
