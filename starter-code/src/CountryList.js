import React from 'react';
import CountryCard from "./CountryCard";
import countries from "./countries.json";
import {Link, Route} from "react-router-dom";
import CountryDetail from './CountryDetail';
import './CountryList.css';

class CountryList extends React.Component {
    constructor() {
        super()

        this.state = {
            countries : countries
        }
    }

    render() {
        return (
            <div className="countriesoverview">
                <div className="countrieslist">
                    {this.state.countries.map((country,index) =>    
                        <CountryCard
                            key={country.cca + index.toString()}
                            country={country.name.common}
                            cca3={country.cca3}
                        />
                    )
                    }
                </div>

                <div className="countrydetail">
                        <Route path="/:id" component={CountryDetail} />
                </div>
            </div>

        )
    }
}

export default CountryList