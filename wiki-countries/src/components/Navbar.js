import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <NavLink to="/">WikiCountries</NavLink>

            {/* <a className="navbar-brand" href="/">WikiCountries</a> */}

            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Countries list <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Countries details <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div> */}
        </nav>
    )
}
export default Navbar