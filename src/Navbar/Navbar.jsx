import { NavLink } from 'react-router-dom'
import './Navbar.css'
function NavBar() {
    return (
        <div className="nav-bar">
            <nav className="navbar navbar-light bg-light ">
                <div className="container-fluid" style={{ height: '70px' }}>
                    <NavLink to="/">React WikiCountries</NavLink>
                </div>
            </nav >
        </div >
    )
}
export default NavBar