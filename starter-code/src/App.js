import React, { Component } from "react"
import { Link } from "react-router-dom"

import countriesJSON from "./countries.json"
import "./App.css"

class App extends Component {
  state = {
    countries: countriesJSON
  }

  render() {
    console.log(this.state.countries)
    return (
      <>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          {this.state.countries.map(el => {
            return (
              <div className="row row-padding">
                <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                  <div className="list-group">
                    <a className="list-group-item list-group-item-action" href={el.cca3}>
                      <Link to={`/country-detail/${el.cca3}`} countries={this.state.countries}>
                        {el.flag} {el.name.common}
                      </Link>
                    </a>
                  </div>
                </div>
                <div className="col-7">
                  <h1>{el.name.common}</h1>
                  <table className="table">
                    <thead />
                    <tbody>
                      <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{el.capital}</td>
                      </tr>
                      <tr>
                        <td>Area</td>
                        <td>
                          {el.area} km
                          <sup>2</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>Borders</td>
                        <td>
                          <ul>
                            <li>
                              <a href={el.cca3}>
                                {el.borders.map(el => (
                                  <li>{el}</li>
                                ))}
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default App
