import { NavLink } from 'react-router-dom'

const Navbar = () => {




    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <NavLink className="navbar-brand" to="/WikiCountries">WikiCountries</NavLink>
            </div>
        </nav>
    )
}
export default Navbar