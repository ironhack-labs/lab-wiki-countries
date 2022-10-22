import { Routes, Route, Link } from 'react-router-dom';


function Navbar() {

    return(
        <div>
            <h1>LAB - WikiCountries</h1>
        
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    )

}



export default Navbar