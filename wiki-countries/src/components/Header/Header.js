import React from 'react';
import { Link } from 'react-router-dom';

const header = (props) => (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <Link to="/" className="navbar-brand">WikiCountries</Link>
    </nav>
);

export default header;