import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';
import 'bootstrap/dist/css/bootstrap.css';

export default class MenuComponent extends Component {
    state = {
        countries
    }

    render() {
        const { countries } = this.state

        return(

            <div className="padre" style={{ 
                width: '50%', 
               
                display: 'flex',
                justifyContent: 'center',
                flexDirection:'column',
                alignItems:'center'

                }}>

                <h1>Bienvenido</h1>
            <div 
                style = {{
                    width: '30vw',
                    height:'800px',
                    overflow: 'scroll',
                    marginTop:'30px',
                    textAlign: 'center',
                    fontSize: '18px',
                    borderStyle: 'solid'
                }}
                >
                
                {countries.map ((country, i) => (
                    <Link key = {i} to={`/country/${country.cca3}`}>
                        <p>{country.name.official}</p>
                        <p>{country.flag}</p>
                    </Link>
                ))}

                </div>
            </div>

        )
    }
}