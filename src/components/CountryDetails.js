import React, { useEffect, useState, useCallback } from 'react';
import countries from '../countries.json';

export default function CountryDetails(props) {
  //since function does not use State ={} this is how we have to declare it here
  const [country, setCountry] = useState({});

  console.log('props is: ', props);
  console.log('props.match.params is: ', props.match.params);
  console.log('country is: ', country);

  //console.log("country name is: ", countries.name.common)
  let id = props.match.params.countryId;

  let countryData = () => {
    //iterate first
    let myCountry = countries.filter((country) => {
      if (country.cca3 === id) {
        return true;
      }
    });
    setCountry(myCountry[0]);
  };

  useEffect(() => {
    countryData();
  }, []);

  //componentDidUpdate
    useEffect(() => {
      console.log('Comp did update here');
      //necessary to avoid infinite loop
      if (country.id !== props.match.params.countryId) {
        countryData();
      }
    });

  



  if (!country.name) {
    return <div>{'loading'}</div>;
  } else {


    if (country.borders.length === 0) {
        return (
            <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            </div>
            );
    } else {
        return (


            <div class="col-7">
            <h2>{country.name.common}</h2>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="">{country.borders.toString()}</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
);


            {/* <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Borders: {country.borders.toString()}</p>
            <p>Area: {`${country.area} km²`}</p>
            </div> */}
            
    }
    
  }
}
