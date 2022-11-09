import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const baseUrl = 'https://ih-countries-api.herokuapp.com/countries/';

// Not sure, if I did the bonus Iteration correctly. After Iteration3 everythin
// worked. And the data for this CountryDetails component just came from the
// same api page that the CountriesList is made from (-> here as props.countries),
// as all the necessary data is there.
//
// Now this page does its own api request for the same data instead, but
// still needs the props.countries to show the full country names for the borders.
// So it basically just made stuff slower..

function CountryDetails({ countries }) {
  const params = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    async function fetchCountry() {
      console.log('fetching');
      const response = await fetch(baseUrl + params.id);
      const data = await response.json();
      console.log('DATAAA: ', data);
      setCountry(data);
    }
    fetchCountry();
  }, [params.id]);

  console.log('OUT');
  useEffect(() => console.log('EFFECT COUN: ', country), [country]);
  useEffect(() => console.log('PARAMS: ', params.id), [params.id]);

  if (country.name) {
    return (
      <div className="countryDetails">
        <img
          src={`https://flagpedia.net/data/flags/icon/128x96/${country.alpha2Code.toLowerCase()}.png`}
          alt={country.name.common}
        />
        <h1>{country.name.common}</h1>
        <div className="category">
          Capital: <span>{country.capital}</span>
        </div>
        <div className="category">
          Area: <span>{country.area}</span>
        </div>
        {country.borders[0] && (
          <div className="category">
            Borders:
            <span>
              <ul className="borderList">
                {country.borders.map((elem) => {
                  return (
                    <li>
                      <Link to={`/${elem}`} key={elem}>
                        {
                          countries.find(
                            (findCountry) => elem === findCountry.alpha3Code
                          ).name.common
                        }
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default CountryDetails;
