import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group text-center">
            {props.countries.map((country) => (
              <Link
                to={`/${country.alpha3Code}`}
                key={country.alpha3Code}
                name={country.alpha2Code}
                className="list-group-item list-group-item-action "
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="flag"
                />
                <br />
                {`${country.name.common} ${country.alpha2Code}`}
              </Link>
            ))}
          </div>
      </div>
  );
}

export default CountriesList;
