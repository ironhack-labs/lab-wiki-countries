import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Navbar extends Component {
    render() {

        
        return (
            <div>

                <Link
                component="button"
                variant="body2"
                onClick={() => {
                    console.info("I'm a button.");
                }}
                >
                lab-wiki-countries
                </Link>  
                
            </div>
        )
    }
}


export default Navbar