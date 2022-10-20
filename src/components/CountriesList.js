import { Routes, Route, Link } from 'react-router-dom';

function CountriesList(props) {
  console.log('countries error', props);
  return (
    <div>
      <h2>List of countries:</h2>

      {props.countries.map((country) => {
        return (
          <div className="country">
            <h2>{country.name.official}</h2>
            <Link to={`/countries/${country.id}`}>Country details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
