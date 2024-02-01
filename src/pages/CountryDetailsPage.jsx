import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCountryDetail } from '../services/countryService';

const CountryDetailsPage = () => {
  const { alpha3code } = useParams()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    getCountryDetail(alpha3code)
      .then(countryApi => {
        setCountry(countryApi)
      })
      .catch(err => {
        console.error(err)
      })
  }, [alpha3code])

  if (!country) return 'Loading...'

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Country details</h1>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt={`${country.name.common} flag`}
      />
      <h4 className="mb-3">{country.name.common}</h4>
      <div>
        <h2 className="mb-3">CAPITAL - {country.capital[0]}</h2>
        <h2 className="mb-3">Area - {country.area} km2</h2>
        <div>
          <h2 className="mb-3">Borders</h2>
          <ul className="list-unstyled">
            {country.borders.map((alpha3Code) => {
              return (
                <li key={alpha3Code} className="mb-2">
                  <Link to={`/detail/${alpha3Code}`} className="btn btn-info">
                    {alpha3Code}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
        }

export default CountryDetailsPage;
