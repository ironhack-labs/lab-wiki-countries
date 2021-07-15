
import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

//PURPOSE to create link and for the user to click on link to a given project. To do this we also need to add some lines...
//...of code in ProjectDetail.js-file and App.js-file.

//On the CountryList we make the axios to all the countries, and set the staet as countries: result.data (same as we've done)
//On country list iterate via .map

//WHY is the countrie set with []?

class CountriesList extends React.Component {
    state = {
        countries: [],
    };

    async componentDidMount() {
        // 1. Make the call to the API
        const response = await axios.get("https://restcountries.eu/rest/v2/all");
        console.log(response.data);
        // 2. Wait for the response from the API
        // 3. Set the state with the response
        this.setState({
            countries: response.data,
        });
    }

    render() {
        return(
            <div>
                <h2>Country list</h2>
                {this.state.countries.map((element) => {
                    return (
                        <div key={element.id}>
                        <p>Code: {element.alpha3Code}</p>
                        <Link to={`/country/${element.alpha3Code}`}>{element.name}</Link>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CountriesList;