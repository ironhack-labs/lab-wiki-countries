import {Link} from "react-router-dom"
import { Card} from "antd";
import "../App.css";

function Navbar() {
    return(
        <Card id="navbar">
            <Link id="option-navbar" to="/">WikiCountries</Link>
        </Card>
    )
}

export default Navbar;
