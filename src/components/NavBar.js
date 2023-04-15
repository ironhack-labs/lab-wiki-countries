import { Link } from "react-router-dom"; 

function Navbar() {
    return (
        <div class='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link style={{textDecoration:'none', color:'black'}} class="navbar-brand p-4" to="/"><h3>LAB - WikiCountries</h3></Link>
            </nav>
        </div>
    )
}

export default Navbar;