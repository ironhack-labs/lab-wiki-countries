import { Link, NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <nav className='navbar navbar-dark bg-primary mb-3'>
        <ul className='container'>
            <NavLink to='/' className='navbar-brand'>Wiki Countries</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar