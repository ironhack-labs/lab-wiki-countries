import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import countries from  '../countries.json'

function CountryDetails(props) {
    const [country, setCountry] = useState({});

    const { countryCode } = useParams();
   

    useEffect(() =>{
        const choosenCountry = countries.find(country => country.alpha3Code === countryCode)
        console.log(choosenCountry)
        setCountry(choosenCountry)
    }, [countryCode])

    const borderingCountries =  country.borders 

    if(!country?.name && !country?.name?.common){
        return <p>Loading...</p>
    }

    return (
        <div className="col-7">
            <h1>{country.name.common}</h1> 
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png` }  alt= 'sth' />
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {country.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {borderingCountries.map((bordering)=> {
                        return(
                            <li key={bordering}> <Link to={`/${bordering}`}>{bordering}</Link></li>
                        )
                    })}
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>


    )
  
}

export default CountryDetails

