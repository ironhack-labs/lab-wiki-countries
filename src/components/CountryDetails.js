import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const { countryId } = useParams();
  //   console.log('countryId: ', countryId);

  const renderOneCountry = () => {
    const result = props.countries.filter(
      (country) => country.alpha3Code === countryId
    );
    const flagCode = result[0].alpha2Code.toLowerCase();

    let borders =
      result[0].borders.length > 0 &&
      result[0].borders.map((border) => {
        const countryName = props.countries.filter(
          (country) => country.alpha3Code === border
        );

        return (
          <Link className="border-link" to={`/${border}`}>
            {countryName[0].name.common}
          </Link>
        );
      });

    return (
      <div>
        <img
          className="flag"
          src={`https://flagpedia.net/data/flags/icon/72x54/${flagCode}.png`}
          alt="Country flag"
        />
        <h1>{result[0].name.common}</h1>

        <p>
          <strong>Capital</strong>
        </p>
        <p>{result[0].capital}</p>

        <p>
          <strong>Area</strong>
        </p>
        <p>
          {result[0].area} km<sup>2</sup>
        </p>

        <p>
          <strong>Borders</strong>
        </p>
        {borders}
      </div>
    );
  };

  return <div className="col-7">{renderOneCountry()}</div>;
}

export default CountryDetails;
