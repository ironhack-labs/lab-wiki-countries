import React from 'react'
import { withRouter } from 'react-router-dom'

function CountryDetails(props) {

    console.log(props.country.capital, typeof props.country.capital)
    return (
        <div className='country-details' style={{width: '100%', marginRight: 50, textAlign: 'left'}}>
            <h1>{props.country.name.common}</h1>
            <hr/>
            <div className='capital' >
                <span style={{width: 200, textAlign: 'left'}}>Capital(s)</span>
                <span style={{textAlign: 'left'}}>{props.country.capital.join(' - ')}</span>
            </div>
            <hr/>
            <div className='area'>
                <span style={{width: 200, textAlign: 'left'}}>Area</span>
                <span style={{textAlign: 'left'}}>{props.country.area} Km²</span>
            </div>
            <hr/>
            <div className='borders' style={{display: 'flex', flexDirection:'row'}}> 
                <span style={{width: 200, textAlign: 'left'}}>Border(s)</span>
                <div style={{textAlign: 'left'}}>
                    <ul>
                        {props.country.borders.map((b, i)=> <li key={i}>{findCountryByCode(b, props.countries)}</li>)}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

function findCountryByCode(code, list){
    const country = list.find(c => c.cca3 === code)
    return country.name.common
}

export default withRouter(CountryDetails)
