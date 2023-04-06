import { Link } from 'react-router-dom';


function CountriesList(props) {
  if (!props.countries) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="row">
      {props.countries.map((country) => (
        <div className="col-3 mb-3" key={country.alpha3Code}>
          <Link to={`/${country.alpha3Code}`} className="card text-center">
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{country.name.common}</h5>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
