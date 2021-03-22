import React from 'react';
import countriesJSON from './../countries.json';
import {Link} from 'react-router-dom'

const CountryDetails = (props) => { 

const idCountry = props.match.params.id;

const CountryInfos = countriesJSON.find( country =>  country.cca3 === idCountry )
console.log(CountryInfos)

return (
    <div style={ListCountriesDetails}>

<table className="table" style={{ paddingLeft: '25px', paddingRight: '25px' }}>
  <thead>
    <tr style={{paddingLeft: '25px', paddingRight: '25px' }}>
      <th scope="col"></th>
      <th scope="col"><h3> {CountryInfos.name.common}</h3></th> 
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Capital</th>
      <td>{CountryInfos.capital}</td>
      
    </tr>
    <tr>
      <th scope="row">Area</th>
      <td> {CountryInfos.area} </td>
      
    </tr>
    <tr>
      <th scope="row">Borders  </th>
      <td> <ul className="list-group">  
                
                 {CountryInfos.borders.map((borderCountry, index)  => {     
                const countryByBorder = countriesJSON.find( country =>  country.cca3 === borderCountry )
        return (    
            
                 
                <li style={{listStyle: 'none'}} key={index}>
                       
                {countryByBorder.name.common}
                
                </li> 
        )
    })}
            </ul> </td>
    </tr>
  </tbody>
</table>




        </div>

    )}

const ListCountriesDetails = {  
paddingRight: '10vw',
justfyContent:'center',
marginLeft: '5vw',
paddingLeft: '5vw'
}

export default CountryDetails; 