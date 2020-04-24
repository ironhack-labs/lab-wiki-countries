import React, { Component } from 'react';
import './styles.css';
import { Link } from "react-router-dom";

class ListCountries extends Component {
    
    render(){
        const {countries} = this.props;
        return (
            <div className="box-list"> 
                {countries.map((country,index) => {
                    return <div> <Link to={country.cca2} className="country-row" key={index}> {country.flag} {country.name.common} </Link> </div>
                })}
            </div>
        )
    }
}

export default ListCountries;