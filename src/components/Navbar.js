import React from "react"
import { Outlet } from "react-router-dom"

const Navbar = () => {
    return (
        <>
                 <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/countries">WikiCountries</a>
        </div>
      </nav>
      <Outlet/>
        </>
    )
}

export default Navbar
