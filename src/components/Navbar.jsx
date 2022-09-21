import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='my-navbar'>
                <NavLink to='/home' className='nav-text'>Wiki Countries</NavLink>
            </div>

        </>
    )
}

export default Navbar