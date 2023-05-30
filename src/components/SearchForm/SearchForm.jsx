import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Enter movie"
          className={css.formInput}
        />
        <button className={css.formBtn}>Search</button>
      </form>
    </>
  );
};

export default SearchForm;
