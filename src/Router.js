import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import data from './countries.json';
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route
              path="/countries"
              element={<CountriesList allCountries={data} />}
            >
              <Route
                path=":cca3"
                element={<CountryDetails allCountries={data} />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
