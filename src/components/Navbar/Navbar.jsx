import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return(
        <div className="Navbar">
            <nav className="container">
                <Link to="/"><h1>WikiCountries</h1></Link>
            </nav>
        </div>
    )
}