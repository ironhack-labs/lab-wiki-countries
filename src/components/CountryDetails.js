import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { alphaCode } = useParams();

  /* console.log(alphaCode);
  console.log(props.listOfCountries[0]); */

  const filteredCountry = props.listOfCountries.filter((element, index) => {
    return element.alpha3Code === alphaCode;
  });

  console.log(filteredCountry[0]);
  const flagURL = filteredCountry[0].alpha2Code.toLowerCase();

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${flagURL}.png`}
            alt="flag"
          ></img>{' '}
          {filteredCountry[0].name.common}
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default CountryDetails;
