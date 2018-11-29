import React, {Component} from "react"
import countryArray from '../countries.json'
import './CountryDetail.css';
import { Link } from 'react-router-dom'

function countryUrl(oneCountry){
    return `/country/${oneCountry.cca3}`;
  }

function findCountry(idFromUrl){
    return countryArray.find(oneCountry =>{
        return oneCountry.cca3 === idFromUrl;
    })
}

class CountryDetail extends Component{
    render(){
        const {params} = this.props.match
        const countryInfo = findCountry(params.countryCCA)
        return(
            <section className="CountryDetail">
                <h2>{countryInfo.name.common}</h2>

                    <table>
                    <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{countryInfo.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{countryInfo.area} km2</td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td><ul>{countryInfo.borders.map(oneBorder =>{
                    return <Link to={countryUrl(findCountry(oneBorder))}><li key = {countryInfo.cca3}>{findCountry(oneBorder).name.common}</li></Link>
                })}</ul></td>
                    </tr>
                    </tbody>
                    </table>



            </section>
        )
    }
}

export default CountryDetail