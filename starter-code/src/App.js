import React, { Component } from "react"
import "./App.css"
import countries from "./countries.json"
import CountryDetail from "./components/CountryDetail"
import CountryList from "./components/CountryList"
import Routes from "./Routes"

class App extends Component {
  state = {
    country: {},
    countries: []
  }

  componentWillMount() {
    this.setState({ countries: countries })
  }

  render() {
    let { countries, country } = this.state
    return (
      <div className="App">
        <h1>Countries</h1>
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              <CountryList countries={countries} />
            </div>
          </div>
          <div className="col-7">
            <Routes />
          </div>
        </div>
      </div>
    )
  }
}

export default App
