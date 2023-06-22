import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          {props.countries.map(function (country) {
        
            return (
                <Link  key={country.alpha3Code} className="list-group-item list-group-item-action"
                  to={`/${country.alpha3Code}`}
                >
                  <div><img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag of country"
                  /></div>
                  {country.name.common}
                </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
 
}

export default CountriesList;
