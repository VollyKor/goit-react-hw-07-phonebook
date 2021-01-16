import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import { setFilterR } from '../../redux/phonebook/phonebook-actions';

import s from './Filter.module.css';

export default function Filter(/*{ setFilter, data: { filterQ } }*/) {
  const filterQ = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <label className={s.label}>
        <span>Filter </span>
        <input
          type="text"
          className={s.input}
          value={filterQ}
          onChange={e => dispatch(setFilterR(e.target.value))}
        />
      </label>
    </div>
  );
}
