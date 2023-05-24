import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">WikiCountry</Link>
            </div>
        </nav>
    )

}
export default NavBar