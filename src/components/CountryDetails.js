import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const { countryCode } = useParams();

  const selectedCountry = props.countries.find((e) => {
    return e.alpha3Code === countryCode;
  });

  return (
    <>
      {selectedCountry ? (
        <div key={selectedCountry._id}>
          <h2>{selectedCountry.name.common}</h2>
          <h4>Capital: {selectedCountry.capital[0]}</h4>
          <hr />
          <p>Area: {selectedCountry.area}</p>
          <hr />
          <p>Bordered:</p>
          <ul>
            {selectedCountry.borders.length
              ? selectedCountry.borders.map((x) => {
                  return (
                    <li key={x}>
                      {' '}
                      <Link to={`/${x}`}>{x}</Link>
                    </li>
                  );
                })
              : 'No Bordered countries'}
          </ul>
        </div>
      ) : (
        <div>....Loading</div>
      )}
    </>
  );
}

export default CountryDetails;
