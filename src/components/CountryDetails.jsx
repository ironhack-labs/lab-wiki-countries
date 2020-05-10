import React from 'react'
import CountriesList from './CountriesList'
import { Link } from 'react-router-dom';
import jsonList from '../countries.json'

export default function CountryDetails(props) {
    
const detailsCountry = jsonList.find((value)=> {
return value.cca3 === props.match.params.id
})
const getCountryName = (ID) => {
const countryName = jsonList.find((value) => {
if (value.cca3 === ID){
return value
}
})
return countryName.name.common
}


    return (
        <React.Fragment>
<CountriesList list={jsonList}/>

                <div className="col-7">
            <h1>{detailsCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{detailsCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{detailsCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {detailsCountry.borders.length > 0 ? (
                        detailsCountry.borders.map((country)=>  (
                      <li><Link key={country.name} to={`/countries/${country}`}>{getCountryName(country)}</Link></li>
                      )) ) : ( <span>no borders</span>)     
                      }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

         
      
          </React.Fragment>


    )
}
