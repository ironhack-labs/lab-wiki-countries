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

        <h2>Country Details</h2>
              <div className="container">
                <div className="row">
                  <div className="col-3 max-height: 90vh; overflow: scroll">
                    <div className="list-group">
                      <img src={country.flags.png} alt="" />

                        <h3 className="list-group-item list-group-item-action">
                          {country.name.common}
                        </h3>
                        <h3 className="list-group-item list-group-item-action">
                          Official Denomination: {country.name.official}
                        </h3>
                        <h3 className="list-group-item list-group-item-action">
                          Capital: {country.capital}
                        </h3>
                        <h3 className="list-group-item list-group-item-action">
                          CCA3: {country.cca3}
                        </h3>

                    </div>
                  </div>
                </div>
              </div>
            </>
    )}

    {!country && <p>Country not found</p>}
  </div>
);
  }

export default CountriesSearch