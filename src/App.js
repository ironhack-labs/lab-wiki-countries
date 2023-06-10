// src/App.js
import './App.css';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
// import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <div>
      <Navbar />

      <Flex>
        <CountriesList countries={countries} />
        {/* <CountryDetails /> */}
      </Flex>
    </div>
  );
}
export default App;
