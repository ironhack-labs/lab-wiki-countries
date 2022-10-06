import { Link } from 'react-router-dom';
import { useState } from 'react';
// import CountryArray from '../countries.json';

function CountryList(props) {
  const { countries } = props;
  const [countryList, setCountryList] = useState();
  console.log(countryList);
  return (
    <div className="col-5" style={{ maxheight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((country) => {
          const imageLink =
            'https://flagpedia.net/data/flags/icon/72x54/' +
            country.alpha2Code.toString().toLowerCase() +
            '.png';
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img src={imageLink} alt="Flag"></img>
              <h2>{country.name.common}</h2>
            </Link>
          );
        })}
        {/* <Link className="list-group-item list-group-item-action" to="/ABW">
          🇦🇼 Aruba
        </Link>

        <Link className="list-group-item list-group-item-action" to="/AFG">
          🇦🇫 Afghanistan
        </Link>
        <Link className="list-group-item list-group-item-action" to="/AGO">
          🇦🇴 Angola
        </Link>
        <Link className="list-group-item list-group-item-action" to="/AIA">
          🇦🇮 Anguilla
        </Link>
        <Link className="list-group-item list-group-item-action" to="/ALA">
          🇦🇽 Åland Islands
        </Link>
        <Link className="list-group-item list-group-item-action" to="/ALB">
          🇦🇱 Albania
        </Link>
        <Link className="list-group-item list-group-item-action" to="/AND">
          🇦🇩 Andorra
        </Link>
        <Link className="list-group-item list-group-item-action" to="/ARE">
          🇦🇪 United Arab Emirates
        </Link>
        <Link className="list-group-item list-group-item-action" to="/ARG">
          🇦🇷 Argentina
        </Link>
        <Link className="list-group-item list-group-item-action" to="/ARM">
          🇦🇲 Armenia
        </Link>
        <Link className="list-group-item list-group-item-action" to="/ASM">
          🇦🇸 American Samoa
        </Link>
        <Link className="list-group-item list-group-item-action" to="/ATA">
          🇦🇶 Antarctica
        </Link>
        <Link className="list-group-item list-group-item-action" to="/FLK">
          🇫🇰 Falkland Islands
        </Link>
        <Link
          className="list-group-item list-group-item-action active"
          to="/FRA"
        >
          🇫🇷 France
        </Link>
        <Link className="list-group-item list-group-item-action" to="/ZWE">
          🇿🇼 Zimbabwe
        </Link> */}
      </div>
    </div>
  );
}

export default CountryList;
