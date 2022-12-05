import "./App.css";
import countries            from "./countries.json";
import Navbar               from "./components/Navbar";
import CountryDetails       from "./components/CountryDetails";
import CountriesList        from "./components/CountriesList";
import ErrorPage            from "./components/ErrorPage";
import { useState, useEffect } from "react";
import { Route, Routes }    from "react-router-dom";
import { Link, useParams }  from "react-router-dom";
import axios                from "axios";

function App() {
  const [countriesList, setCountriesList] = useState(countries);
  const [fetch, setFetch] = useState(true);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountriesList(response.data);
        setFetch(false);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<CountriesList countriesList={countriesList} />}
        />
        <Route
          path="/:countryId"
          element={<CountryDetails countriesList={countriesList} />}
        />
        <Route
          path="*"
          element={<ErrorPage />} //Does not work
        />
      </Routes>
    </div>
  );
}

export default App;