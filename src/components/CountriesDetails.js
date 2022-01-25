import { useParams } from 'react-router-dom';
import CountryLink from './CountryLink';

const CountriesDetails = ({ countries }) => {
  const { id } = useParams();
  const country = countries.find((country) => country.alpha3Code === id);

  return (
    <div className="px-2 py-3">
      <h2 className="mb-4">{country.name.common}</h2>
      <div className="row pt-3 pb-2 border-bottom border-top">
        <div className="col-md-4">
          <p>Capital</p>
        </div>
        <div className="col-md-4">
          <p>{country.capital}</p>
        </div>
      </div>
      <div className="row pt-3 pb-2 border-bottom">
        <div className="col-md-4">
          <p>Area</p>
        </div>
        <div className="col-md-4">
          <p>{country.area} km²</p>
        </div>
      </div>
      <div className="row pt-3 pb-2">
        <div className="col-md-4">
          <p>Borders</p>
        </div>
        <div className="col-md-4">
          {country.borders.length > 0 ? (
            country.borders.map((border) => {
              const borderingCountry = countries.find(
                (country) => country.alpha3Code === border
              );
              return (
                <CountryLink
                  key={border}
                  name={borderingCountry.name.common}
                  path={border}
                  flag={borderingCountry.alpha2Code}
                />
              );
            })
          ) : (
            <p>No bordering countries.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountriesDetails;
