import { NavLink } from 'react-router-dom'

const navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark" >
            <div className='container'>
                <NavLink to='/' exact><span className="navbar-brand mb-0 h1">WikiCountries</span></NavLink>
            </div>
        </nav>
    )
}

export default navbar