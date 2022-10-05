import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((er) => {
        console.log('errr: ', er);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={data} />
      <Routes>
        <Route
          path="/country/:id"
          element={<CountryDetails countryList={data} />}
        />
      </Routes>
    </div>
  );
}

export default App;
