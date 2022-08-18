import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';

function CountriesSearch() {
const [country, setCountry] = useState(null);

const [input, setInput] = useState('')

const [countrySearch, setCountrySearch] = useState(null)

/* const {countryCca} = useParams(); */

const countriesApi = `https://restcountries.com/v3.1`;

const getCountry = async () => {
  try {
    console.log('here', countrySearch);
    let response = await axios.get(`${countriesApi}/name/${countrySearch}`);
    setCountry(response.data[0]);
  } catch (error) {
    console.log(error);
  }
};

const handleInput = (e) => setInput(e.target.value);

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setCountrySearch(input)
}

useEffect(() => {
    getCountry();
}, [countrySearch]);



return (
  <div>
    <h2>Country</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleInput} />
      <button type="submit">Search for a Country</button>
    </form>
    {country && (
      <>
        <p>{country.name.common}</p>
      </>
    )}

    {!country && <p>Country not found</p>}
  </div>
);
  }

export default CountriesSearch