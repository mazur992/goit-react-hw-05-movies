import { FormMovies } from '../App.styled';

export default function Searchbar(props) {
  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const search = await form.elements.search.value.trim();
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
