import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div class="col-5" style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}>
      <div class="list-group">
        {countries.map((country) => (
          <>
            <Link to={`/${country.alpha3Code}`}>{country.name.common} </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
