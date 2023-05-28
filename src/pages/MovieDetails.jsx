import { Outlet, Link } from 'react-router-dom';
export default function MovieDetails() {
  return (
    <>
      <div>details</div>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
