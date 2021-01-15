import s from './Filter.module.css';

export default function Filter({ setFilter, data: { filterQ } }) {
  const handleFilter = e => {
    setFilter(e.target.value);
  };
  return (
    <div className="filter">
      <label className={s.label}>
        <span>Filter </span>
        <input
          type="text"
          className={s.input}
          value={filterQ}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
}
// перебор
// если содержит алерт и стоп
// если нет добавили контакт
//
//
