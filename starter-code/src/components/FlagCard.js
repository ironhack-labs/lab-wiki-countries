import React, { Component } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom"

class FlagCard extends Component {
    state = {
        countryId: "ABW",
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({ countryId: id });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            const { id } = nextProps.match.params;
            this.setState({ countryId: id });
        }
    }

    countryName = (cca3) => {
        let countryInfo = countries.find(country => country.cca3 === cca3)
        return countryInfo.name.common;
    }



    render() {
        const { countryId } = this.state;
        const { countryName } = this;
        const country = countries.filter(country => country.cca3 === countryId)
        const borders = country[0].borders;
        console.log(borders);

        return (
            <table className="uk-table uk-margin-medium-left uk-table-divider uk-width-1-3 uk-text-left uk-text-emphasis">
                <h2>{country[0].name.common}</h2>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{country[0].capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country[0].area} km2</td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            {borders.map((cca3, index) => (
                                <ul className="border-list">
                                    <li>
                                        <Link to={`/${cca3}`}>{countryName(cca3)}</Link>
                                    </li>
                                </ul>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default FlagCard;