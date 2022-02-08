import './CountryListStyle.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function CountriesList() {
    const [fetching, setFetching] = useState(true);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get(apiURL).then((apiRes) => {
          console.log()
            setCountries(apiRes.data)
            setFetching(false);
        });
    }, []);

    return (
      <div className="CountryList col-5 height">
        {fetching ? (
          <h4>Loading ...</h4>
        ) : (
          <ul className="list-group">
            {countries.map((country) => (
              <li className="list-group-item" key={country._id}>
                <Link
                  className="linx stretched-link"
                  to={`/${country.alpha3Code}`}
                >
                  <img alt='flag' src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                  {country.name.common}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default CountriesList;