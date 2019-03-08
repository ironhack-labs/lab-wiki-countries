import React from 'react';
import {Link} from "react-router-dom";

const navBar = () => {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-sm bg-primary">
                <div>
                    <Link className="wiki" to="/">WikiCountries</Link>
                </div>
            </nav>
        </div>
    );
};

export default navBar;