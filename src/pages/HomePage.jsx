import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'

import axios from "axios";

function HomePage() {
    const [countriesArr, setCountriesArr] = useState(null);

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
          .then((response) => {
            setCountriesArr(response.data);
          })
          .catch((error) => {
            console.log('Error getting countries from the API...');
            console.log(error);
          });
      }, []);

      const getFlagImg = (alpha2Code) => `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`;

    return (
        <div>

            <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        WikiCountries
                    </Link>
                </div>
            </nav>


            <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>

                <div className="list-group">
                    {countriesArr === null
                        ? <p>Loading...</p>
                        : countriesArr.length && countriesArr.map(country => (
                            <Link
                                key={country.alpha3Code} className="list-group-item list-group-item-action"
                                to={`/${country.alpha3Code}`}
                            >
                                {country.alpha2Code && (
                                    <img
                                        src={getFlagImg(country.alpha2Code)} alt={`Flag of ${country.name.common}`}
                                        style={{ marginRight: '10px' }}
                                    />
                                )}
                                <br></br>
                                {country.name.common}
                                
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;