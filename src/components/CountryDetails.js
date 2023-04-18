import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const [foundCountry, setFoundCountry] = useState(null);
  const { alpha3Code } = useParams();

  /*useEffect(() =>{
    const country = countries.find((selectedCountry) =>{
      return selectedCountry.alpha3Code === alpha3Code
    })
    setFoundCountry(country)
    console.log('foundCountry', foundCountry)
  }, [alpha3Code]) */

  /* useEffect(() => {
  setFoundCountry(countries.find(country => country.alpha3Code === alpha3Code))
}, [alpha3Code]) */

useEffect(() => {
  fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
  .then(res => res.json())
  .then(alpha3Code => setFoundCountry(alpha3Code))
})


  return <div className="col-7">
      {foundCountry && <div>
      <img style={{ width: 150 }} src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
                alt="country-flag"
              />         
      <h3>{foundCountry.name.common}</h3> 
      <table className="table">
        <thead></thead>
        <tbody>
        <tr>
          <td>Capital</td>
          <td>{foundCountry.capital}</td>
        </tr> 
        <tr>
          <td>Area</td>
          <td>{foundCountry.area} km2</td>
        </tr> 
        <tr>
          <td>Borders</td>
          <td>
          <ul className="list-unstyled">
            {foundCountry.borders.length === 0 ? <p>None</p> :
              foundCountry.borders.map(border => {
              return <li key={border}> <Link to={`/${border}`}>{border}</Link></li>
            })}
              </ul>
          </td>
        </tr> 
        </tbody>
      </table>
      </div>
      }

  </div>;
};

export default CountryDetails;
