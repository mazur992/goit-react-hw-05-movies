import { FormMovies } from '../App.styled';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function Searchbar(props) {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const search = form.elements.search.value;
    if (search === '') {
      Notify.failure('You have entered an empty string');
      return;
    }
    props.onSubmit(search);

    form.reset();
  };
  return (
    <FormMovies>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </FormMovies>
  );
}
Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
