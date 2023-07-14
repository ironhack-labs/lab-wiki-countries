import React from 'react'
import { useParams } from 'react-router-dom'



  //this allows us to set a var for maping through diff countrys' alpha3code
  const CountryDetails = ({ countries }) => {

    //useParams allows us to have multiple endpoint urls such as /countries/USA & /countries/FRA"
  const {alpha3Code} = useParams();
    let country = countries.find(country => country.alpha3Code === alpha3Code);

    if (!country) {
        return <div>Country Not Found!</div>;
    }
  
  return (
    <div className="col-7">
          <img 
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
            alt={`${country.name.common} Flag`}
          />
        <h1>{country.name.common}</h1>
        <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td style={{ width: '30%' }}>Capital</td>
                    <td>{country.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                        {country.area} km
                          <sup>2</sup> 
                          {/* this allows for exponents! */}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);
};

export default CountryDetails;
