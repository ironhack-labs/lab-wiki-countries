import {Link} from 'react-router-dom';

function Navbar() {
    return(

        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
        </nav>



        /* {<nav>
            <Link to='/'>WikiCountries</Link>
        </nav>} */
    );
};

export default Navbar;