import { NavLink } from "react-router-dom"
function Navbar() { 

return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">WikiCountries</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'selected' : ''}>Inicio</NavLink>
        </div>
      </div>
    </div>
  </nav>
)
}
export default Navbar;
