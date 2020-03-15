import React from "react";
import "./App.css";
import { CountryDetails } from "./components/CountryDetail";
import { Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CountryList } from "./components/CountryList";
import { CountryContextProvider } from "./context/countries.context";

function App() {
  return (
    <>
      <CountryContextProvider>
        <NavBar />
        <div>
          <div className="container">
            <div className="row">
              <CountryList />
              <Route path="/:cca3" component={CountryDetails} />
            </div>
          </div>
        </div>
      </CountryContextProvider>
    </>
  );
}

export default App;
