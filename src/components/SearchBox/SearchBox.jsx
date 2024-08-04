import css from "./SearchBox.module.css";

const SearchBox = ({ filterValue, handleFilter }) => {
  return (
    <label className={css.searchFormLabel}>
      <span className={css.searchFormTitle}>Find contacts by name</span>
      <input
        className={css.contactFormInput}
        type="search"
        name="search"
        placeholder="Enter your request"
        value={filterValue}
        onChange={handleFilter}
      />
    </label>
  );
};

export default SearchBox;
