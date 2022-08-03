//componente tonto (dummy)

const Navbar = ({ title = 'WikiCountries' }) => (
  <nav className="navbar navbar-dark bg-primary mb-3">
    <div className="container">
      <a className="navbar-brand" href="/">
        {title}
      </a>
    </div>
  </nav>
);

export default Navbar;
