import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-style">
            <h3>WikiCountries</h3>
            {/* <ul>
                <li><NavLink to='/' exact activeStyle={{ fontWeight: 'bold', color: 'red' }}>Home</NavLink></li>
                <li><NavLink to='/about' activeStyle={{ fontWeight: 'bold', color: 'red' }}>About</NavLink></li>
                <li><NavLink to='/perfil' activeStyle={{ fontWeight: 'bold', color: 'red' }}>Perfil</NavLink></li>
                <li><NavLink to='/vuelos/nacionales?name=Miguelin&age=33' activeStyle={{ fontWeight: 'bold', color: 'red' }}>Route Params & Query Strings</NavLink></li>
            </ul> */}
        </nav>
    )
}

export default Navbar