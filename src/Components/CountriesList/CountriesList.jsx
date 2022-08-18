import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;

  return (
    <div>
      {countries.map((country) => {
        return (
          <div key={country._id}>
            <>
              <Link to={`/${country.alpha3code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                />
                {country.name.common}
              </Link>
            </>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
