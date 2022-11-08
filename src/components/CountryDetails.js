import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const params = useParams();
  console.log(params.id);
  const foundCountry = countries.find((elem) => elem.alpha3Code === params.id);
  console.log("ALPHA2", foundCountry.alpha2Code);
  return (
    
    <div>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt={foundCountry.name.common} />
      <h1>{foundCountry.name.common}</h1>
      <span>Capital: </span>
      <span>{foundCountry.capital}</span>
      <br />
      <span>Area: </span>
      <span>{foundCountry.area}</span>
      <br />
      {foundCountry.borders[0] &&<span>Borders: </span>}
      <span>
        {foundCountry.borders.map((elem) => {
          return <Link to={`/${elem}`}>{elem}</Link>;
        })}
      </span>
    </div>
  );
}

export default CountryDetails;
