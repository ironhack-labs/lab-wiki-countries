import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>   
            <Link to={`/countries`} ><h1>LAB - WikiCountries</h1></Link>
        </nav>
    )
}
export default Navbar;