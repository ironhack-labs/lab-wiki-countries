import { Link } from "react-router-dom"


const Navbar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">WIKI COUNTRIES</Link>
        </div>
    </nav>

    )
}
export default Navbar