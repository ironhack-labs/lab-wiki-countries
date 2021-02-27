import React from 'react'
imort {Link} from 'react-router-dom'

export default function Navbar() {
    return (
         <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/countries">
                WikiCountries
            </Link>
            </nav>
        </div>
    )
}
