import React, { Component } from "react";
import "./App.css";
import CountryList from "./components/CountryList.js";
import Home from "./components/Home.js";
import { Switch, Route} from "react-router-dom";
import CountryDetail from "./components/CountryDetail.js";

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-5">
            <CountryList />
          </div>
          <div className="col-7">
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return <Home name="Rita" />;
                }}
              />

              <Route exact path="/:code" component={CountryDetail} />
            </Switch>
          </div>
          {/* <Route exact path='/' component={CountryList}/> */}
        </div>
      </div>
    );
  }
}

export default App;
