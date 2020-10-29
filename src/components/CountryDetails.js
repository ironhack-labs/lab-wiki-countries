import React, { useEffect, useState } from 'react';
import countries from '../countries.json';


export default function CountryDetails(props) {
  const [country, setCountry] = useState({});

  console.log('props: ', props)
  console.log('props.match.params.countryId is: ', props.match.params.countryId)
  ;

 
  let id = props.match.params.countryId //SERVERSIDE PATH

  let countryData = () => {
    // filter so you get a match between serverId and .jsonId
    //returns an ARRAY with 1 element thats why setCoutry(myCountry[0])
    let myCountry = countries.filter((country) => {
        
      if (country.cca3 === id) {  //countries.json PATH
        return true
      }
    })

    setCountry(myCountry[0])
  }


  useEffect(() => {
    countryData();
  }, []);

  //componentDidUpdate
    useEffect(() => {
      console.log('componentDidUpdate');
      //if there is no match dont go to infinite loop
      if (country.id !== props.match.params.countryId) {
        countryData()
      }
    })




    //if there is no match display nothing
  if (!country.area) {
    return <div></div>;
  } else {
    //else display without Borders for islands and with <ul> for others

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

            <div>
                <h1>{country.name.common}</h1>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>
                <ul>
                    {
                    country.borders.map((border)=>{
                        //border inside Array country.borders = cca3
                        return <li><a href={`/country/${border}`}>{border}</a></li>
                    }) 
                    }
                </ul>
            </div>

           
        )

    }

  }
}