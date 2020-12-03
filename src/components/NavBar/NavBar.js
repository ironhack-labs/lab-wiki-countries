import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <h1>WikiCountries</h1>
                <nav className="navbar navbar-dark bg-primary mb-3">
                    <div className="container">
                        <Link className="navbar-brand" to={`/`}>WikiCountries</Link>
                    </div>
                </nav>
            </div>
        )
    }

}

export default NavBar;