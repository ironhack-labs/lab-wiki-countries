import React from 'react';
import countries from '../countries.json'
import { Route, Link, Switch } from 'react-router-dom';


class CountryDetails extends React.Component {

    bordersCodesToNames = (bordersCodesArray) => {
        let bordersName = []
        for (let i = 0; i < bordersCodesArray.length; i++) {
            let oneCountry = countries.find(c => c.cca3 === bordersCodesArray[i])
            bordersName.push({ "country": oneCountry.name.common, "countryCode": oneCountry.cca3 })
        }
    
        return bordersName
    
    }

    renderBorders = (borders) => {
        if (borders.length > 0) {
            return (
            <ul>{borders.map(b =>
                <Link to={"/" + b.countryCode}>
                    <li>{b.country}</li>
                </Link>)}
            </ul>
            )
        }
        else return <p>None</p>
    }

    render() {
        let currentCountry = countries.find(c => c.cca3 === this.props.match.params.theID)
        let myBorders = this.bordersCodesToNames(currentCountry.borders)
        
        return (
            <div>
                <h1>{currentCountry.name.common}</h1>
                <p>Capital: {currentCountry.capital}</p>
                <p>Area: {currentCountry.area} km2</p>
                <div>Borders : {this.renderBorders(myBorders)}</div>
            </div>
        )
    }

}

export default CountryDetails