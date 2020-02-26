import React from "react";
import countries from "./countries.json";
import "./App.css";
import Countrys from "./Countrys.js";

class App extends React.Component {
  state = {
    countries: countries
  };

  render() {
    return (
      <section className="App">
     
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <div className="navbar-brand" href="/">
              WikiCountries
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">

            {/* Here your list! On the left */}
            <div className="col-sm-6">
              {/* <div className="list-group"> */}

              {this.state.countries.map((country, index) => (
                <Countrys>
                  {/* key={country.demonym} */}
                  cca3={country.cca3}
                  flag={country.flag}
                  common={country.name.common}
                </Countrys>
              ))}

              {/* </div> */}
            </div>

            {/* Here the right size! On the right*/}
            <div className="col-sm-6">
              <h1 className="text-left">France</h1>
              <div className="border-top my-3"></div>
              <div className="row">
                <div className="col-sm-3 text-left">Capital</div>
                <div className="col-sm-3 text-left">Paris</div>
              </div>
              <div className="border-top my-3"></div>
              <div className="row">
                <div className="col-sm-3 text-left">Area</div>
                <div className="col-sm-3 text-left">551695 km</div>
              </div>
              <div className="border-top my-3"></div>
              <div className="row">
                <div className="col-sm-3 text-left">Borders</div>
                <div className="col-sm-3">
                  <ul>
                    <li>
                      <a href="/AND">Andorra</a>
                    </li>
                    <li>
                      <a href="/BEL">Belgium</a>
                    </li>
                    <li>
                      <a href="/DEU">Germany</a>
                    </li>
                    <li>
                      <a href="/ITA">Italy</a>
                    </li>
                    <li>
                      <a href="/LUX">Luxembourg</a>
                    </li>
                    <li>
                      <a href="/MCO">Monaco</a>
                    </li>
                    <li>
                      <a href="/ESP">Spain</a>
                    </li>
                    <li>
                      <a href="/CHE">Switzerland</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
