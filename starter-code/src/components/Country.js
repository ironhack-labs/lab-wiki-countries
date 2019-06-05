import React, { Component } from 'react';
import countries from "../countries.json";
import { Link } from "react-router-dom";


class Country extends Component {
  constructor() {
    super();
    this.state = {
      countries
    };
  }

  render() {
    return (<div>
        <div className="container">
            <ul className="row">
              {this.state.countries.map(elm => {
              return (
                <li key={elm.cca3} className="col-md-4">
                  <Link
                    to={`/${elm.cca3}?name=${
                      elm.name.official
                    }&flag=${elm.flag}&region=${
                      elm.region
                    }&area=${elm.area}&borders=${
                      elm.borders
                    }&capital=${elm.capital}`}
                  >
                    {elm.name.common}
                    {elm.flag}
                  </Link>
                </li>
              );
                        })}
            </ul>
          </div>
          </div>
          )
  }
}

export default Country;
