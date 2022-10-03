import {Link,Routes,Route} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
        <nav className='navbar navbar-dark bg primary mb-3'>
            <div className='container'>
                <a className='navbar-brand' href='/'>LAB - WikiCountries</a>
                <Link to='/'>WikiCountries</Link>
            </div>
        </nav>
        </div>
    )
}

export default NavBar