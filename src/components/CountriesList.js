import countries from "../countries.json";
import { Link } from "react-router-dom";
import CountriesDetails from "./CountriesDetails";
import { Component } from "react";

const countriesList = [...countries]


class CountryList extends Component {
    constructor() {
        super()
        this.state = {
            country: {},
            renderCountry: false
        }
    }


    renderCountry = (country) => {

        this.setState({
            renderCountry: true,
            country: { ...country }
        })

    }


    render() {
        return (

            <div className="container" >
                <div className="row">
                    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                        <div className="list-group">

                            {countriesList.map((country, i) => {
                                return (
                                    <Link to={'/country/' + country.cca3} className="list-group-item list-group-item-action" key={i} onClick={() => this.renderCountry(country)}
                                    >{country.flag} {country.name.common}</Link>
                                )
                            })}

                        </div>
                    </div>


                    {this.state.renderCountry ? <CountriesDetails country={this.state.country} fn={this.renderCountry} /> : null}





                </div>
            </div>
        )
    }
}

export default CountryList;