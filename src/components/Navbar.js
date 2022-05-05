import { Link } from 'react-router-dom';

function Navbar () {
    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px'
    }

    return (
        <div className='Navbar'>
            <Link style={linkStyle} to="/">WikiCountries</Link>
        </div>
    )
}

export default Navbar;