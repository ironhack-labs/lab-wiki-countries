import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { detailCountries } from '../../../services/CountryService';

export const CountryDetails = ({ countries }) => {
  const { id } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    detailCountries(id)
      .then((country) => {
        console.log(country);
        setCountry(country);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      {country ? (
        <div style={{ width: '500px' }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="Country Flag"
              style={{ width: '200px' }}
            />
            <h1>{country.name.common}</h1>
          </div>
          <div className="d-flex justify-content-between">
            <p>
              <strong>Capital</strong>
            </p>
            <p>{country.capital[0]}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>
              <strong>Area</strong>
            </p>
            <p>{country.area} km2</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>
              <strong>Borders</strong>
            </p>

            <div className="d-flex flex-column align-items-center">
              {country.borders.length > 0
                ? country.borders.map((border) => {
                    return (
                      <Link to={`/${border}`}>
                        {
                          countries.find(
                            (country) => border === country.alpha3Code
                          ).name.common
                        }
                      </Link>
                    );
                  })
                : 'This country has no borders'}
            </div>
          </div>
        </div>
      ) : (
        'Loading Country...'
      )}
    </div>
  );
};
