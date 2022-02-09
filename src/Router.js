import { Routes, Route } from 'react-router-dom';
import { CountryDetails } from './components';
import countries from './countries.json';

function Router() {
  return (
    <Routes>
      <Route path="/:countryId" element={<CountryDetails countriesData={countries} />}
      ></Route>
    </Routes>
  );
}

export default Router;