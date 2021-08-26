import { Component } from "react";
import dataCountries from "../../data/countries.json"
import { Link, Route } from 'react-router-dom';

class CountriesList extends Component {

    state = {
        countries: []
    }
    componentDidMount() {
        this.setState({ countries: dataCountries })
    }


    render() {
        const { countries } = this.state
        return (
            <div>
                <div clasName="col-4">
                    <ul className="list-group">
                        {countries.map(country =>
                            <Link exact to={country.cca3}> <li key={country.cca3}> {country.flag} {country.name.common} </li></Link>
                        )}
                    </ul>
                </div>
                {/* <div clasName="col-8">
                    {countries.map(country => 
                        <Link to={`/countries/${country.name.official}`} > {country.name.official}</Link>
                    )}
                </div>             */}
            </div>
        )
    }
}
export default CountriesList



