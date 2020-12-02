import { NavLink } from 'react-router-dom'

const navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <ul>
                    <li ><NavLink to='/' exact activeStyle={{ fontWeight: 'bold', color: 'red' }}>WikiCountries</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar