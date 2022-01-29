import { Link } from 'react-router-dom';
// import countries from '../countries.json';

const CountriesList = (props) => {
  const countryList = props.countries.map((country) => (
    <Link
      className="list-group-item list-group-item-action"
      to={`/countries/${country.alpha3Code}`}
      key={country.name.common}
    >
      {country.name.common}
      {country.alphaCode2}
    </Link>
  ));
  return (
    <div className="row">
      {/* <!-- Countries List (Bootstrap column) --> */}
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">{countryList}</div>
      </div>
    </div>
  );
};

export default CountriesList;
