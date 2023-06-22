import { Link } from 'react-router-dom';
import { CountryDetails } from './CountryDetails';
export const CountriesList = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {props.list.map((country, index) => {
              return (
                <div key={index}>
                  <Link
                    className="list-group-item list-group-item-action"
                    to={`/${country.alpha3Code}`}
                  >
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                      alt=""
                    />
                    {country.alpha3Code} {country.name.common}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
