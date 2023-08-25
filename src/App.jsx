import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; 
import CountryDetails from "./pages/CountryDetailsPage"; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:countryId" element={<CountryDetails/>}/>
      </Switch>
    </Router>
  );
};

export default App;
