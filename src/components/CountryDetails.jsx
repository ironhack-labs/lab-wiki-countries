import React from 'react';
import CountriesData from '../countries.json';
import CountryLink from './CountryLink';
const CountryDetails = (props) => {
  const countrySelected = CountriesData.find((el) => {
    return el.cca3 === props.match.params.id;
  });
  return (
    <div className="container col-8 pl-5">
      <div className="row border-bottom">
        <h1 className="text-left">{countrySelected.name.common}</h1>
      </div>
      <div className="row border-bottom">
        <p className="text-left">Capital {countrySelected.name.common}</p>
      </div>
      <div className="row border-bottom">
        <p className="text-left">Area {countrySelected.area} km2</p>
      </div>
      <div className="row">
        <p className="text-left col-2 p-0">Borders</p>
        <ul className="text-left mx-auto col-6">
          {countrySelected.borders.map((border) => {
            const countryFound = CountriesData.find((borderCountry) => {
              return borderCountry.cca3 === border;
            });
            return (
              <li>
                <CountryLink country={countryFound} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CountryDetails;
