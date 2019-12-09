import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import countries from '../countries.json'

export default class Menu extends Component {
    state = {
        countries
    }

    render() {
        const { countries } = this.state

        return (
            <div
                style={{
                    width: '40vw',
                    height:'100vh',
                    overflow: 'scroll',
                }}
            >
            {countries.map((country, i) => (
                <Link key={i} to={`/country/${country.cca3}`}
                    style ={{
                        color: 'black',
                        textDecoration: 'none',
                    }}
                >
                    <p style={{
                        width: '100%',
                        borderTop: 'thin solid grey',
                        padding:'2%',
                    }}
                    
                    >{ country.flag } {country.name.official}</p>
                </Link>
            ))}
            </div>
        )
    }
}