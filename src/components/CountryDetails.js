import React from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import './CountryDetails.css';

class CountryDetails extends React.Component {
    state = {
        name: "",
        capital: "",
        area: "",
        borders: [],
    };

    async settingUpTheState() {
        const countryId = this.props.match.params.id;
        const country = await axios.get(`https://restcountries.eu/rest/v2/alpha/${countryId}`);

        const tempBorderArr = await Promise.all(country.data.borders.map((code) => axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)));
        const newBorderArr = tempBorderArr.map((country) => country.data);

        this.setState({
            name: country.data.name,
            capital: country.data.capital,
            area: country.data.area,
            borders: newBorderArr,
        })
    }



    componentDidMount() {

        this.settingUpTheState();
    }

    componentDidUpdate(prevProps) {

        if (this.props !== prevProps) {

            this.settingUpTheState();
        };
    }


    render() {
        const { name, capital, area, borders } = this.state;
        return (
            <>
                <div className="content container">
                    <div className="row country">
                        <h1>{name}</h1>
                    </div>

                    <div className="row country">
                        <div class="col-md-3">
                            <h4>Capital</h4>
                        </div>
                        <div class="col-md-9">
                            <h4>{capital}</h4>
                        </div>
                    </div>

                    <div className="row country">
                        <div class="col-md-3">
                            <h4>Area</h4>
                        </div>
                        <div class="col-md-9">
                            <h4>{area} km²</h4>
                        </div>
                    </div>


                    <div className="row">
                        <div class="col-md-3">
                            <h4>Border</h4>
                        </div>
                        <div class="col-md-9">

                            <ul>
                                {borders.length ? borders.map((border) => {
                                    return <li key={border.alpha3Code}>
                                        <NavLink to={border.alpha3Code}>{border.name}</NavLink>
                                    </li>
                                }) : <li>None</li>}
                            </ul>
                        </div>
                    </div>

                </div>
            </>
        );
    };
};


export default CountryDetails;