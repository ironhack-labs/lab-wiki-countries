import { Link } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col">
                        <Link className="navbar-brand" to="/">WikiCountries</Link>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;