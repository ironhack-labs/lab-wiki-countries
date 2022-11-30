import { NavLink } from "react-router-dom";


function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink to="/" className='text-dark text-decoration-none'>LAB-WikiCountries</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav >
        // <nav classNameName="NavBar ">
        //     <NavLink to="/" classNameName={({ isActive }) => isActive ? "selected" : ""}>React WikiCountries</NavLink>
        // </nav>
    )
}

export default NavBar