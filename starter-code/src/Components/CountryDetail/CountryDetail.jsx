import React from "react";
import { Switch, Link, Route } from "react-router-dom";
export default function CountryDetail(props) {
  // console.log(props.countries);
  let country = props.countries.find(eachCountry => {
    // console.log(eachCountry.name.common);
    return props.match.params.id === eachCountry.cca3;
  });
  // console.log(country);

  let loadBoarders = () => {
    let borders = country.borders.map((border, i) => {
      return props.countries.find(eachCountry => {
        if (border === eachCountry.cca3) {
          // console.log(eachCountry);
          return eachCountry;
        }
      });
    });
    // console.log(borders);
    return borders.map((border, i) => {
      return (
        <li key={i}>
          <Link
            to={`/country/${border.cca3}`}
            className="ist-group-item list-group-item-action"
          >
            {border.name.common}{" "}
          </Link>
        </li>
      );
    });
  };
  return (
    <div>
      <div className="list-group col-7">
        {/* <!-- List group: https://getbootstrap.com/docs/4.0/components/list-group/#links-and-buttons --> */}
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              {/* style="width: 30%;" */}
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <Switch>
                    <Route
                      exact
                      path="/country/:id"
                      component={props => loadBoarders()}
                    />
                  </Switch>
                  {loadBoarders()}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// import React from "react";

// function CountryDetail ({

// export default CountryDetail
