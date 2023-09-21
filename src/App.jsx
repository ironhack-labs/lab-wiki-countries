import "./App.css";
import { Button } from "antd";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./components/CountryDetails";
import ErrorPage from "./pages/ErrorPage";
import CountryList from "./components/CountryList";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {
  const [fetching, setFetching] = useState(true);
  const [countries, setCountries] = useState([]);
  // const [showCountries, setShowCountries]=useState(false);

  const navigate = useNavigate(); // Get the navigate function
  const location = useLocation(); // Get the location function

  const apiURL = "https://ih-countries-api.herokuapp.com/countries";

  // const toggleForm = () => {
  //   setShowCountries(!showCountries);
  // };

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      response.data.sort(function (a, b) {
        if (a.name.common < b.name.common) {
          return -1; //sort a after b (b 먼저)
        }
        if (a.name.common > b.name.common) {
          return 1; //sort a before b (a 먼저)
        }
        return 0;
      });
      // console.log("DATA", response.data);
      setCountries(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div className="App">
      {fetching && <p>Loading ...</p>}
      <Navbar />
      {/* <Button
        type="link"
        onClick={() => {
          navigate("/countries"); // Navigate to the "/countries" route
        }}
      > 
       Go to Countries
      </Button> */}

      {location.pathname !== "/countries" && (
        <Button
          type="link"
          onClick={
            () => navigate("/countries")}>  
          Go to Countries
        </Button>
      )}

      {/* OR <Link to="/countries">
        <Button type="link">Go to Countries</Button>
      </Link> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/countries"
          element={<CountryList countries={countries} />}
        />
        <Route
          path="/countries/:alpha3code"
          element={<CountryDetails countries={countries} />}
        />

        <Route path="*" element={<ErrorPage />} /> 
        <Route path="/countries/*" element={<ErrorPage />} />

      </Routes>
    </div>
  );
}

export default App;
