import { Component } from 'react'
import App from './App'

class NavBar extends Component {


    render() {

        return (

            <nav className='navbar navbar-dark bg-primary mb-3'>
                <div className='container'>
                    <h1 className='navbar-brand'>WikiCountries</h1>
                </div>
            </nav>

        )
    }
}

export default NavBar