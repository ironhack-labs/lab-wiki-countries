import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeText = { color: 'red' }
    return (

        <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
                <NavLink to="/" activeText>WikiCountries</NavLink>
            </div>
        </nav>

    )
}
export default Navbar