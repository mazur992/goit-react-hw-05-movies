import { Outlet, Link } from 'react-router-dom';
export default function Movies() {
  return (
    <div>
      <input type="text" />
      <Outlet />
    </div>
  );
}
