import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((country) => {
          const countryLowercase = country.alpha2Code.toLowerCase();
          const countryFlag = `https://flagpedia.net/data/flags/icon/72x54/${countryLowercase}.png`;
          return (
            <Link
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img src={countryFlag} alt={country.name.common} />
              <br/>
              {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
