import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div>
            <nav className='navbar navbar-dark bg-primary mb3'>
                <div className='container'>
                    <h4 className='navbar-brand'>WikiCountries</h4>
                    <ul className='navbar-nav'>
                        <Link className='navbar-link' style={{fontweight: 'bold', color: 'white'}} to={`/`}>Back to HomePage</Link>
                    </ul>
                </div> 
            </nav>
        </div>

    )
}

export default Navbar;
