import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-dark">
                    <span style={{fontWeight: "bolder"}}>WikiCountries</span>
                </Link>
            </div>
            <div className="container-fluid" style={{width: '20%'}}>
                <p style={{margin: '0', padding: '0'}}> Made by André Pinto @Ironhack Lisbon</p>
            </div>
        </nav>
    )
}

export default Navbar;
