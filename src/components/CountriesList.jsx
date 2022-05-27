import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function CountriesList(props) {
  const { countries } = props;
 /*  console.log(countries);
  const [allCountries, setAllCountries] = useState(countries);

  useEffect(() => {
    setAllCountries(countries);
  }, [countries]); */
  return (
    <div>
      {countries.map((el) => {
        return <Link to={`/${el.alpha3Code}`}>{el.name.common}</Link>;
      })}
    </div>
  );
}

export default CountriesList;
