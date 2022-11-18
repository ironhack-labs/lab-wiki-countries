import "./App.css";
import countriesInfo from "./countries.json";
import NavbarComponent from './components/NavbarComponent';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Outlet, Route, Routes } from "react-router-dom";


function PageLayout() {
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </div>
  );
}


function App() {

  return (
    <Routes>
      <Route path={"/"} element={<PageLayout />}>
        <Route index element={<CountriesList countryItems={countriesInfo} />} />
        <Route path={"/:countryId"} element={[<CountriesList countryItems={countriesInfo} />,<CountryDetails countryItems={countriesInfo} />]} />
      </Route>
    </Routes>
  );
}
export default App;