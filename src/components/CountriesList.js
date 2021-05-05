import { Component } from "react";
import "./CountriesList.css"
import Country from "./Country"

class CountriesList extends Component {

    render() {
        return (
            <div className="countriesList">

                {
                    this.props.countries.map(elm => {
                        return <Country key={elm.cca3}
                            cca3={elm.cca3}
                            name={elm.name.common}
                            flag={elm.flag} />
                    })
                }
            </div>
        )
    }
}

export default CountriesList