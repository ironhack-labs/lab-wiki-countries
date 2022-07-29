import "./App.css";
import countriesJson from "./countries.json"
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
import {useState, useEffect} from "react";
import axios from "axios"

function App() {
    const [countries, setCountries] = useState(null)

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries/")
            .then(response => {
                console.log(response.data)
                setCountries(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="App">
            <Navbar />
            <CountriesList countries={countries} />
            <CountryDetails countries={countries} />
        </div>
    )
}
export default App;