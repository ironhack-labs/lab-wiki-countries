import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-primary mb-3">
                <div class="container">
                    <a class="navbar-brand" href="/">WikiCountries</a>
                </div>
            </nav>    
        )
    }
}