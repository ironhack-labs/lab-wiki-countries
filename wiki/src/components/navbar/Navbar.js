import React from 'react'

import { Navlink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <Navlink to="/"class="navbar-brand mb-0 h1">Wiki Countries</Navlink>
        </nav>

    )
}

export default Navbar