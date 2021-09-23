import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (

        <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
                <NavLink class="navbar-brand" to="/" exact >WikiCountries</NavLink>
            </div>
        </nav>
    )
}

export default Navbar