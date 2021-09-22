import { Link } from 'react-router-dom';

const Navbar = () => (

    <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
            <Link className="navbar-brand" to="/">
                WikiCountries_
            </Link>
        </div>
    </nav>
);

export default Navbar;