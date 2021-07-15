import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import './CountriesList.css';

class CountriesList extends React.Component {
    state = {
        countries: [],
    };

    async componentDidMount() {
        const res = await axios.get("https://restcountries.eu/rest/v2/all");
        this.setState({
            countries: res.data,
        });
    };


    render() {
        const { countries } = this.state
        return (
            <>
                <div class="list">
                    <ul>
                        {countries && countries.length ? (
                            countries.map((country) => {
                                return <div key={country.alpha3Code}>
                                    <img src={`https://www.countryflags.io/${(country.alpha2Code).toLowerCase()}/flat/64.png`} />
                                    <NavLink to={country.alpha3Code}>{country.name}</NavLink>
                                </div>;
                            })
                        ) : (
                            <p>Buffering...</p>
                        )}
                    </ul>
                </div>
            </>
        );
    };
};

export default CountriesList;