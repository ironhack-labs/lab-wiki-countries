import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.css';

class Country extends Component {
    render(){
        const {country, borders} = this.props;
        console.log(country, borders);
        return (
            <div className="box-list nb space-h">
                <h1 className="line"> {country.name.common} {country.flag} </h1> 
                <div className="line">
                    Capital: {country.capital}
                </div>
                <div className="line">
                    Area: {country.area}
                </div>
                <div className="line">
                    Borders:
                    <ul>
                        {borders.map((border,index) => {
                            return  (
                            <li key={index}> 
                                <Link className="country-row" to={border.cca2}> 
                                    {border.flag} {border.name.common} 
                                </Link> 
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Country;