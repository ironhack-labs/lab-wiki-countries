import { NavLink } from 'react-router-dom'

    

const NavBar = () => {
    

    return (
                
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">

                <NavLink to='/' className="navbar-brand">Countries</NavLink>                
            </div>

        </nav>
        
    )
}

export default NavBar