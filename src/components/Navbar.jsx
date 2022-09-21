import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const styles = {
        textDecoration: "none",
        color: "white"
    }
    return (
        <nav className="navbar navbar-dark bg-dark mb-3 ">
            <div className="container">
                <NavLink
                    style={styles}
                    to='/home'
                    className={({ isActive }) => (isActive ? 'selected' : '')}>
                    WikiCountries
                </NavLink>
            </div>
        </nav>
    )

}

export default NavBar;
