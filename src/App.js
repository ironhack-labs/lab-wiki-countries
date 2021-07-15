import './App.css';
import { Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import CountryDetails from './component/CountryDetails';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <Route path={'/country/:countryIndex'} component={CountryDetails} />
    </div>
  );
}

export default App;
