import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountriesList({ countries }) {
  // let params = useParams();
  // const [countryFiltered, setCountryFiltered] = useState('');
  // useEffect(() => {
  //   const countryCopy = [...countryFiltered];
  //   setCountryFiltered(
  //     countryCopy.filter((country) => country.alpha3Code === params.alpha3Code)
  //   );
  //   console.log(countryFiltered);
  //   console.log(params.alpha3Code);
  //   return () => {
  //     console.log('Cleanup - Component Unmounting');
  //   };
  // }, []);
  let params = useParams();
  console.log(params.alpha3Code);

  const toDetails = (border) => (
    <li key={border}>
      <Link to={`/${border}`}>
        {countries.find(({ alpha3Code }) => alpha3Code === border).name.common}
      </Link>
    </li>
  );

  return (
    <div>
      {countries
        .filter((each) => each.alpha3Code === params.alpha3Code)
        .map((each) => (
          <div key={each.alpha3Code}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${each.alpha2Code.toLowerCase()}.png`}
              alt=""
            />
            <h1>{each.name.common}</h1>
            <p>Capital: {each.capital}</p>
            <p>Area: {each.area} km2</p>
            <ul>{each.borders.map(toDetails)}</ul>
          </div>
        ))}
    </div>
  );
}

export default CountriesList;
