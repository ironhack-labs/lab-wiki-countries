import React from 'react';
import { Link, Route } from "react-router-dom";
import countries from '../countries.json';

class CountryDetails extends React.Component {
    state = {
        name: "",
        capital: "",
        borders: [],
        area: null
    }

    componentDidMount() {
        const country = countries.find(
            (country) => country.cca3 === this.props.match.params.countryCode
        );

        if (country) {
            this.setState({
                name: country.name.official,
                capital: country.capital,
                borders: country.borders,
                area: country.area,
            });
        }
    }

    render() {
        return <div className="col-8">
            <h2>{this.state.name}</h2>
            <ul>
                <li>Capital: {this.state.capital}</li>
                <li>Area: {this.state.area} km²</li>
                <li>Borders:
                <ul>
                        {this.state.borders.map((border) => {
                            return <li>
                                {border}
                            </li>
                        })}
                    </ul>
                </li>
                
            </ul>
        </div>
    }


}

export default CountryDetails