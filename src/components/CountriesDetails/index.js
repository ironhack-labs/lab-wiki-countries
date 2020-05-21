import React from 'react';

const CountriesDetails = ({ countries, getBorders, ...props }) => {
  const country = countries.find(coun => coun.cca3 === props.match.params.id);
  console.log({ country });
  return (
    <div className="col-7">
      <div className="table">
        <h2>{country.name.common}</h2>
        <h3 style={{ width: '30%' }}>Capital: {country.capital[0]}</h3>
        <h3>Area: {`${country.area} Km2`}</h3>
        <h3>Borders:</h3>
        <ul>{getBorders(country)}</ul>
      </div>
    </div>
  );
};

export default CountriesDetails;
