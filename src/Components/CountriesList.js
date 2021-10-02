import React from "react";
import countries from '../countries.json'
import CountryDetails from './CountryDetails'
import { Link, Route } from 'react-router-dom';

class CountriesList extends React.Component {

    render() {
        return (
            <div>
                <div className="col-5" style={{ "maxHeight": "90vh", "overflow": "scroll" }}>
                    <div className="list-group">
                        {countries.map((country) => {
                            return (
                                <h3><Link to={"/countrydetails/" + country.cca3}>
                                
                      {country.name.official}

                                </Link>
                                </h3>
                                
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default CountriesList