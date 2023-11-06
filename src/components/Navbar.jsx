import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h3>WikiCountries</h3>
        <ul>
            < Link to = "/">HomePage </Link>
            < Link to = "/countryId">CountriesDetails </Link>          
        </ul>
    </nav>
)

    
    
}

export default Navbar;
