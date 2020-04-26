import React, { Component } from 'react';
// COMPONENTS 
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <nav>
                
                <Link to='/'>Home</Link>
                <br/><hr /> {/*<br /> and <hr /> break and line */}
                <Link to='/About'>About</Link>
                <br/><hr />
                <Link to='/Contact'>Contact Us</Link>
                <br/><hr />
                <Link to='/'>Wiki Country</Link>
                <br/><hr />

                
            </nav>
        );
    }
}
// inside the link to ='/Contact"> is what will show on the 
export default Navbar;