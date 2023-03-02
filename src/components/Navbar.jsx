function Navbar() {
  return (
    <div>
      {/* Displaying the basic navbar with the LAB name */}
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            LAB - WikiCountries
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
