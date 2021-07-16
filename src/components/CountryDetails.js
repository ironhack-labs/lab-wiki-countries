import React from 'react';
import { Link } from 'react-router-dom';
import countryData from '../countries.json';


export default function CountryDetails(props) {
    //question - where is the props passed from? from component={CountryDetails} in app js?
    //checked, indeed, props are available for CountryDetails throught the route
const { params } = props.match;
console.log('checking if params:', params);
const countryToShow = countryData.find(country => country.cca3 === params.cca3);
//notes: stupid mistake I made - didnt notice params came out as an oject so I should use
//params.cca3 instead just params when looking for the country to show
console.log('checking if country is retrived:', countryToShow.name.common);
console.log('checking how border data look like:', countryToShow.borders);
const borders = countryToShow.borders.map(border => countryData.find(country => country.cca3 === border));
     return (
         <div>
                <p>Capital:{countryToShow.capital}</p>
                <p>{countryToShow.area}km</p>
           {borders.map(elm =>
                <div key={elm.cca3}>
                <Link to={`/${elm.cca3}`}>{elm.name.common}</Link>
                </div>
                )}
         </div>
     )

}




