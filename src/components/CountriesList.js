import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  const divStyle = {
    maxHeight: '90vh',
    overflow: 'scroll',
  };

  return (
    <div className="col-5" style={divStyle}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div key={country.alpha3Code}>
              <Link
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}
              >
                <div>{country.alpha3Code} </div>
                <div>{country.name.official}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
