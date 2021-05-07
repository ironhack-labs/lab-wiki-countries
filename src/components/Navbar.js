import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav className="nav-bar">
            <div>
                <Link className="home-btn" to='/'>WikiCountries</Link>
            </div>
        </nav>
    )
}

export default Navbar
