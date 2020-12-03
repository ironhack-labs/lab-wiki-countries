import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
            
            <NavLink className="navbar-brand" to='/' exact activeStyle={{ fontWeight: 'bold', color: 'white' }}>WikiCountries</NavLink>
            
            </div>
        </nav> 
    )
} 

export default NavBar
