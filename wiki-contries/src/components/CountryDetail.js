import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

const Detail = props => {

    let aux = countries.find(elm => elm.cca3 === props.match.params.id);
    let b = aux.borders.map((elm)=> countries.find(x => x.cca3 === elm));

    return (
      <>
        <h1>{aux.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{aux.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {aux.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {b.map((elm, idx) => (
                    <div key={idx}>
                      <Link to={`/country/${elm.cca3}`}
                        className="list-group-item list-group-item-action">
                        {elm.flag} {elm.name.official}
                      </Link>
                    </div>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
}
export default Detail;
