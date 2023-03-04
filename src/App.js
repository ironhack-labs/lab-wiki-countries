import './App.css'; // Importing the styles for the App component from App.css file

// import countries from '../src/countries.json'; // This line is commented out and unused

import Navbar from './components/Navbar'; // Importing the Navbar component

import { Routes, Route } from 'react-router-dom'; // Importing the Routes and Route components from the react-router-dom package

import CountriesList from './components/CountriesList'; // Importing the CountriesList component

import CountryDetails from './components/CountryDetails'; // Importing the CountryDetails component

import { useState, useEffect } from 'react'; // Importing the useState and useEffect hooks from React

const apiURL = ' https://ih-countries-api.herokuapp.com/countries'; // Defining the URL for the countries API

function App() {
  const [allCountries, setAllCountries] = useState([]); // Declaring a state variable "allCountries" and its setter function "setAllCountries", initialized to an empty array

  useEffect(() => { // Defining an effect to fetch data from the API when the component mounts
    const fetchCountries = async () => { // Defining an async function to fetch data from the API
      try {
        const response = await fetch(apiURL); // Sending a GET request to the API
        const data = await response.json(); // Extracting the JSON data from the response
        setAllCountries(data); // Updating the state variable with the fetched data
      } catch (error) {
        console.log(error); // Logging any errors to the console
      }
    };
    fetchCountries(); // Calling the fetchCountries function
  }, []); // The empty dependency array means that this effect will only run once, when the component mounts

  return ( // Returning the JSX markup for the App component
    <div className="App"> {/* Defining the root element of the component */}
      <Navbar /> {/* Rendering the Navbar component */}
      <div className="container"> {/* Wrapping the content in a container */}
        <div className="row"> {/* Creating a row */}
          <Routes> {/* Defining the routes for the app */}
            <Route
              path="/" // Defining the route path for the CountriesList component
              element={<CountriesList countries={allCountries} />} // Rendering the CountriesList component with the "allCountries" prop
            />
            <Route
              path="/country/:countryId" // Defining the route path for the CountryDetails component with a dynamic "countryId" parameter
              element={<CountryDetails countries={allCountries} />} // Rendering the CountryDetails component with the "allCountries" prop
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App; // Exporting the App component for use in other parts of the application.
