import { FormMovies } from '../App.styled';

export default function Searchbar(props) {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const search = form.elements.search.value.trim();
    if (search === '') return;
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
