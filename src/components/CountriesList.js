import { Link } from 'react-router-dom';

function CountriesList() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            <Link className="list-group-item list-group-item-action" to="/ABW">
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
            </Link>
          </div>
        </div>

        <div className="col-7">
          <h1>France</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>Paris</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  551695 km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li>
                      <Link to="/AND">Andorra</Link>
                    </li>
                    <li>
                      <Link to="/BEL">Belgium</Link>
                    </li>
                    <li>
                      <Link to="/DEU">Germany</Link>
                    </li>
                    <li>
                      <Link to="/ITA">Italy</Link>
                    </li>
                    <li>
                      <Link to="/LUX">Luxembourg</Link>
                    </li>
                    <li>
                      <Link to="/MCO">Monaco</Link>
                    </li>
                    <li>
                      <Link to="/ESP">Spain</Link>
                    </li>
                    <li>
                      <Link to="/CHE">Switzerland</Link>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default CountriesList;
