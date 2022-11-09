import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const params = useParams();
  console.log(params.id);
  const foundCountry = countries.find((elem) => elem.alpha3Code === params.id);
  console.log('ALPHA2', foundCountry.alpha2Code);
  return (
    <div className="countryDetails">
      <img
        src={`https://flagpedia.net/data/flags/icon/128x96/${foundCountry.alpha2Code.toLowerCase()}.png`}
        alt={foundCountry.name.common}
      />
      <h1>{foundCountry.name.common}</h1>
      <div className="category">
        Capital: <span>{foundCountry.capital}</span>
      </div>
      <div className="category">
        Area: <span>{foundCountry.area}</span>
      </div>
      {foundCountry.borders[0] && (
        <div className="category">
          Borders:{' '}
          <span>
            <ul className='borderList'>
              {foundCountry.borders.map((elem) => {
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

export default CountryDetails;
