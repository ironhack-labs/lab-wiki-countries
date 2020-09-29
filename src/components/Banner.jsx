import React from 'react'
import {NavLink} from 'react-router-dom'

const Banner = () => {
    return <div className="container banner">
        <NavLink className="banner-brand" to="/">
            <h1>WikiCountries</h1>
        </NavLink>
    </div>
}

export default Banner