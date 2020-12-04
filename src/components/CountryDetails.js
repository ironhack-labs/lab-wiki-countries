import { Link } from 'react-router-dom';

function CountriesDetails(props) {
  const selectedCountry = props.countries.filter(
    (country) => country.cca3 === props.match.params.countryCode
  );

  return (
    <div>
      {selectedCountry.map((country) => {
        return (
          <section>
            <h1>{country.name.common}</h1>
            <hr />
            <div className="property">
              <p className="property-title">Capital:</p>
              <p> {country.capital}</p>
            </div>
            <hr />
            <div className="property">
              <p className="property-title">Area:</p>
              <p>
                {' '}
                {country.area} km<sup>2</sup>
              </p>
            </div>
            <hr />
            <div className="property">
              <p className="property-title">Borders:</p>
              <ul>
                {country.borders.length
                  ? country.borders.map((country) =>
                      props.countries
                        .filter((country) => country.cca3 === country)
                        .map((country) => (
                          <li>
                            <Link to={country.cca3}>{country.name.common}</Link>
                          </li>
                        ))
                    )
                  : 'This country has no bordering countries'}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default CountriesDetails;
