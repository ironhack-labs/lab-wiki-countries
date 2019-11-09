import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

const Info = props => {
  const searchCountry = id => {
    const aCountry = oneCountry => {
      return oneCountry.cca3 === id;
    };
    return countries.find(aCountry);
  };

  const searchBorders = (selectedCountry, countries) => {
    selectedCountry.bordersInfo = [];
    selectedCountry.borders.map(border => {
      console.log(border);
      return selectedCountry.bordersInfo.push({
        name: searchCountry(border).name.common,
        cca3: border
      });
    });
  };

  console.log(props.match.params.id);
  const id = props.match.params.id;
  let selectedCountry = searchCountry(id);

  searchBorders(selectedCountry, countries);
  console.log(selectedCountry.name);

  return (
    <div className="col-7">
      <div className="country-title border-bottom">
        <h1>{selectedCountry.name.common}</h1>
      </div>
      <table className="col-7">
        <tbody>
          <tr className="border-bottom">
            <td className="data-show">Capital</td>
            <td>{selectedCountry.capital}</td>
          </tr>
          <tr className="border-bottom">
            <td className="data-show">Area</td>
            <td>{selectedCountry.area} km</td>
          </tr>
          <tr className="border-bottom">
            <td className="data-show">Borders</td>
            {selectedCountry.borders.length === 0 ? (
              <td>No Borders</td>
            ) : (
              <td className="borders-list">
                {selectedCountry.bordersInfo.map((borderInfo, index) => {
                  return (
                    <li key={index}>
                      <Link to={`/detail/${borderInfo.cca3}`}>
                        {borderInfo.name}
                      </Link>
                    </li>
                  );
                })}
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Info;
