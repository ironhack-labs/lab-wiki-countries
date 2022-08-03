//country details should have been a VIEW not a COMPONENT
import { Route, Routes } from 'react-router-dom';
import { CountriesDetails } from './components';

function RootRoutes() {
  return (
    <Routes>
      <Route path="/:id" element={<CountriesDetails />} />
    </Routes>
  );
}

export default RootRoutes;
