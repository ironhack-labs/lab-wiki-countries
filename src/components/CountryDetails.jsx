// import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries, loading }) {
  // const [foundCountry, setFoundCountry] = useState(null);
  // const [selected, setSelected] = useState(false);
  const { countryCode } = useParams();

  // let selectedCountry;
  // if (!loading && !selected) {
  //   selectedCountry = countries.find((country) => {
  //     return country.alpha3Code === countryCode;
  //   });
  //   setFoundCountry(selectedCountry);
  //   setSelected(true);
  // }

  // // Have to use useEffect => if countryCode (params) changes, then find the country and set state...

  // useEffect(() => {
  //   // this has to go 3 lines up, outside of the effect, maybe...
  //   if (!loading) {
  //     const country = countries.find((country) => {
  //       return country.alpha3Code === countryCode;
  //     });

  //     // if (country) {
  //     setFoundCountry(country);
  //     // }
  //     console.log(foundCountry);
  //   }
  // }, [countries, countryCode, loading]);

  // const selectedCountry = () => {
  //   return countries.find((country) => {
  //     return country.alpha3Code === countryCode;
  //   });
  // };

  const selectedCountry = countries.find((country) => {
    return country.alpha3Code === countryCode;
  });

  const giveBackCountryName = (alpha3) => {
    return countries.find((country) => {
      return country.alpha3Code === alpha3;
    }).name.common;
  };

  return (
    <div
      className="card"
      style={{
        width: '20rem',
        height: 'fit-content',
        margin: 'auto',
        marginTop: '20px',
      }}
    >
      <img
        src={`https://flagpedia.net/data/flags/icon/144x108/${selectedCountry.alpha2Code.toLowerCase()}.png`}
        alt={selectedCountry.name.official}
        style={{ width: '80%', margin: 'auto', marginTop: '20px' }}
      />{' '}
      <div className="card-body">
        <h2 style={{ textAlign: 'center' }} className="card-title">
          {selectedCountry.name.common}
        </h2>
        <p className="card-text">Continent {selectedCountry.region}</p>
        <hr />
        <p>Capital {selectedCountry.capital[0]}</p>
        <hr />
        <p>Area {selectedCountry.area} km²</p>
        {selectedCountry.borders.length !== 0 && (
          <>
            <hr />
            <p>Borders</p>
            <ul>
              {selectedCountry.borders.map((border) => (
                <li key={border}>
                  <Link to={border}>{giveBackCountryName(border)}</Link>
                </li>
              ))}
            </ul>
            <hr />
          </>
        )}
      </div>
    </div>
  );
}
export default CountryDetails;
