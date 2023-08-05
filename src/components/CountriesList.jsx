import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countriesData } = props;
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countriesData.map((country, i) => (
          <Link
            to={`/${country.alpha3Code}`}
            key={i}
            className="list-group-item list-group-item-action"
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
              width={'30px'}
            />
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
