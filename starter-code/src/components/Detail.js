import React from "react"
import Border from './Border'
import '../styles/Detail.css'

const Detail = ({ country, handleSelect }) => {
  return (
    <div className="">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area.toLocaleString()} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(border => <Border handleSelect={handleSelect} key={border} id={border}/>)}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
