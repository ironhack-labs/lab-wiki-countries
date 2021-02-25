import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div>
                <Link to='/countries'>Country Link</Link>
                <h1>wiki-countries</h1>
            </div>
        )
    }
}

export default Main;