import React from "react";
import countries from "../countries.json";

class CountryDetails extends React.Component {

    state = {
        name: "",
        capital: "",
        borders: [],
        area: null
    }

    componentDidMount() {
        const country = countries.find(
            (country) => country.cca3 === this.props.match.params.countryCCA3
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
        return <div>
            <h2>{this.state.name}</h2>
            <ul>
                <li>{this.state.capital}</li>
                <li>Borders:
                <ul>
                        {this.state.borders.map((border) => {
                            return <li>
                                {border}
                            </li>
                        })}
                    </ul>
                </li>
                <li>{this.state.area}</li>
            </ul>
        </div>
    }

}

export default CountryDetails;