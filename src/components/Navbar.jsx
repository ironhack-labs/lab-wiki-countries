import {Link} from "react-router-dom"
function Navbar() {
    return(
        <nav>
            <h1>WikiCountrie</h1>
            <Link to="/">Home</Link>
            <Link to="/:countryId">Country</Link>
        </nav>
    )
}

export default Navbar;
