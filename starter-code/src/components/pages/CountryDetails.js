import React from "react";
import Countries from "../../countries.json";
import { Link} from "react-router-dom";

const CountryDetails = props => {

    const foundCountry = Countries.find(elm => props.match.params.cca3 === elm.cca3);
    
    return (
      <div className="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul className="list-group">
                  {foundCountry.borders.map((border, idx) => (
                    <Link className="list-group-item list-group-item-action" key={idx} to={border}>
                      {Countries.find((country) => country.cca3 === border).name.common}
                    </Link>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default CountryDetails;
