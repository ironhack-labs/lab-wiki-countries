import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const CountryDetails = ({ countries }) => {
  const params = useParams();

  const countryFound = countries.find(
    (country) => country.alpha3Code === params.alpha3Code
  );

  const getName = (border)=>{
    const country = countries.find((country)=> country.alpha3Code === border)
    if(country){
        return country.name.common
    } else {
        return border
    }
  }

  return (
    <div>
      {countryFound ? (
        <div className="card" style={{'alignItems': 'center'}}>
          <img
            style={{'width': '100px'}}
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryFound.alpha2Code.toLowerCase()}.png`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          <h5 className="card-title">{countryFound.name.common}</h5>
          </div>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">Capital: {countryFound.capital}</li>
            <li className="list-group-item"> Area: {countryFound.area} km2</li>
            <li className="list-group-item">
            {countryFound.borders.map((border)=>(
                <li>
                <Link to={`/${border}`}> {getName(border)}</Link>
                </li>
            ))

            }</li>
          </ul>
          
        </div>
      ) : (
        <p>Country not found</p>
      )}
    </div>
  );
};

export default CountryDetails;
