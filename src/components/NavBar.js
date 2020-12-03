import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light">
        <ul>
            <li>Lab Wiki Countries</li>
            <li>
                <Link to="/countries">Countries</Link>
            </li>
        </ul>
        </nav>
    )
}
