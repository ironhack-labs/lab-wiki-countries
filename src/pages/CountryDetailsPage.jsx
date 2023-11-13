import { Link } from "react-router-dom";

function CountryDetails() {
  return (
    <>
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>

        <div className="container">
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>

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
                  551695 km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li><Link to="/AND">Andorra</Link></li>
                    <li><Link to="/BEL">Belgium</Link></li>
                    <li><Link to="/DEU">Germany</Link></li>
                    <li><Link to="/ITA">Italy</Link></li>
                    <li><Link to="/LUX">Luxembourg</Link></li>
                    <li><Link to="/MCO">Monaco</Link></li>
                    <li><Link to="/ESP">Spain</Link></li>
                    <li><Link to="/CHE">Switzerland</Link></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
