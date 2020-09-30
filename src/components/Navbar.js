import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
class Navbar extends Component {
    constructor() {
        super()
        this.state = { }
    }
 
    render() {
 
        return (
            <>
                
                <nav className="navbar navbar-light">
                    <Link to="/" >IronContruies</Link> 
                </nav>
                
            </>
        )
    }
    }
export default Navbar