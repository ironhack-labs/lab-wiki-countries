import React, {Component} from 'react';
import {Link} from "react-router-dom";

export function Nav() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="Country-Details">Country Details</Link>
        </div>
    )
}

export default Nav;