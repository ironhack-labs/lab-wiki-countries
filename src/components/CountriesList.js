
import { Link } from 'react-router-dom';


function CountriesList(props) {

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {props.countryArr.map((country) => {
              return (
                <Link key={country.alpha3Code}
                  className="list-group-item list-group-item-action"
                  to={'/' + country.alpha3Code}
                >
                
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  />{' '}
                  <p>{country.name.common}</p>
                </Link>
                
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
