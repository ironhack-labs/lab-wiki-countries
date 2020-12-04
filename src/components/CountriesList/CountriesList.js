import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../../countries.json'

 class CountriesList extends React.Component {

    state = {
        countries: countries
    }

    render() {
        const {countries} = this.state
        return (
            <div style={{ display: "flex", flexDirection: "row"}}>
                <div>
                    {countries.map((country, i) => {
                        return (
                            <div key={i}>
                            <Link to={`/countrydetails/${country.cca3}`}>{`${country.name.official}`}</Link></div>
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default CountriesList;
