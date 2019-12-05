import React from "react"
import {Link} from 'react-router-dom'

const Navbar =()=>{
    return (
    <>
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand" ><p>WikiCountries</p></Link>
        </nav>
    </>
    )}
export default Navbar