import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

function CountryDetails(props) {
    let axiosCountries = null

    if(!props.country){
        axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((response) => {
            axiosCountries = response.data
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='country-details' style={{width: '100%', marginRight: 50, textAlign: 'left'}}>
            <h1>{props.country.name}</h1>
            <hr/>
            <div className='capital' >
                <span style={{width: 200, textAlign: 'left'}}>Capital(s)</span>
                <span style={{textAlign: 'left'}}>{props.country.capital}</span>
            </div>
            <hr/>
            <div className='area'>
                <span style={{width: 200, textAlign: 'left'}}>Area</span>
                <span style={{textAlign: 'left'}}>{Math.round(+props.country.area / 1000)} Km²</span>
            </div>
            <hr/>
            <div className='borders' style={{display: 'flex', flexDirection:'row'}}> 
                <span style={{width: 200, textAlign: 'left'}}>Border(s)</span>
                <div style={{textAlign: 'left'}}>
                    <ul>
                        {props.country.borders.map((b, i)=> <li key={i}>{props.countries ? findCountryByCode(b, props.countries) : findCountryByCode(b, axiosCountries)}</li>)}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

function findCountryByCode(code, list){
    const country = list.find(c => c.alpha3Code === code)
    return country.name
}

export default withRouter(CountryDetails)
