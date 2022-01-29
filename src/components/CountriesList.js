import React from 'react';
import { Link, Route} from 'react-router-dom';
import CountryDetails from './CountryDetails';

function CountriesList({data}) {
  const countriesJSON = data
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {countriesJSON.map((country) => {
            const countryFlag =
              'https://flagpedia.net/data/flags/icon/72x54/'+
              country.alpha2Code.toLowerCase()+
              '.png';
            return (
              <div key={country.name.common}>
                <img style={{width: "20px"}} src={countryFlag} alt={country.alpha2Code} />
                <Link to={country.alpha3Code}>{country.name.common}</Link>
              </div>
            );
          })}
        </div>
        <div className="col">
          {/* <CountryDetails /> */}
          {/* <Route path="/:id" element={ <SomeComponent someData={someData} /> } /> */}
          <Route path="/:id"><CountryDetails data={countriesJSON}/></Route>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
