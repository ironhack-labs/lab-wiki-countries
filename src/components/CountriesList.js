import { ScrollSpy } from 'bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function CountriesList(props) {
  /*   let { alpha3code } = useParams();
   */
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {props.countryArr.map((country) => {
              console.log(country.name.common);
              console.log(country.alpha2Code.toLowerCase());

              return (
                <Link
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

            {/*  <Link className="list-group-item list-group-item-action" to="/AFG">
              <img src="${countryURL1} + {props.countryArr.alpha2Code} + ${countryURL2}" />{' '}
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
      </div>
    </div>
  );
}

export default CountriesList;
