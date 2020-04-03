import React from 'react';
import countries from "../countries.json";
import { Route } from "react-router-dom";
import CountryList from "../components/CountryList";
import CountryDetail from "../components/CountryDetail";

class WikiCountries extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <ul className="list-countries">
                            {countries.map((country, index) => (
                                <CountryList
                                    key={index}
                                    name={country.name.common}
                                    flag={country.flag}
                                    code={country.cca3}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="col-6">
                        <Route path="/country-detail/:code" component={CountryDetail}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default WikiCountries;