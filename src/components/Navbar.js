import { NavLink } from "react-router-dom";

import '../styles/navBar.css'

const NavBar = () => {

    return (
        <div className="container mt-5">

            <nav>
                <ul>
                    <li>

                        <NavLink to="/" exact>Home</NavLink>
                    </li>
                    <li>

                        <NavLink to="/countries-list" exact>countries</NavLink>
                    </li>

                </ul>
            </nav>

        </div>

    )
}
export default NavBar;