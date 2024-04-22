import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='container'>
            <Link to='/'>
                WikiCountries
            </Link>
        </div>
    )
}

export default Navbar;
