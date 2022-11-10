import { Link, Outlet } from 'react-router-dom';

function Navbar({ handleSearch, searchInput }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary ">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand text-light">
            LAB - WikiCountries
          </Link>
          <input onChange={handleSearch} value={searchInput} />
        </div>
      </nav>
      <Outlet />
    </>
  );
}
export default Navbar;
