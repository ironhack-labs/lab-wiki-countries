import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="container">
      <div className="row">
        <div>
          <div>
            {props.countryArr.map((country) => {
              console.log(country.name.common);
              <Link to={'/countries' + country.alpha3Code}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                />{' '}
                <p>{country.name.common}</p>
              </Link>;
            })}


            <Link className="list-group-item" to="/AGO">
              🇦🇴 Angola
            </Link>

            <Link className="list-group-item" to="/AIA">
              🇦🇮 Anguilla
            </Link>

            <Link className="list-group-item" to="/ALA">
              🇦🇽 Åland Islands
            </Link>

            <Link className="list-group-item" to="/ALB">
              🇦🇱 Albania
            </Link>

            <Link className="list-group-item" to="/AND">
              🇦🇩 Andorra
            </Link>

            <Link className="list-group-item" to="/ARE">
              🇦🇪 United Arab Emirates
            </Link>

            <Link className="list-group-item" to="/ARG">
              🇦🇷 Argentina
            </Link>

            <Link className="list-group-item" to="/ARM">
              🇦🇲 Armenia
            </Link>

            <Link className="list-group-item" to="/ASM">
              🇦🇸 American Samoa
            </Link>

            <Link className="list-group-item" to="/ATA">
              🇦🇶 Antarctica
            </Link>

            <Link className="list-group-item" to="/FLK">
              🇫🇰 Falkland Islands
            </Link>

            <Link
              className="list-group-item list-group-item-action active"
              to="/FRA"
            >
              🇫🇷 France
            </Link>

            <Link className="list-group-item" to="/ZWE">
              🇿🇼 Zimbabwe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
