import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <ul>
      {countries.map((elem) => {
        return (
          <div key={elem.alpha3Code}>
            <img
              src={`https://flagpedia.net/data/flags/icon/32x24/${elem.alpha2Code.toLowerCase()}.png`}
              alt={elem.name.common}
            />
            <Link to={`/${elem.alpha3Code}`}>{elem.alpha3Code}</Link>
            <br />
          </div>
        );
      })}
    </ul>
  );
}

export default CountriesList;
