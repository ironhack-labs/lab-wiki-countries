import React from 'react';
import Countries from "../../countries.json"


export default class CountryDetails extends React.Component {
    state = {
        countries: Countries,
        country: ''
    }


    // componentDidUpdate() {
    //     this.setState({country: this.props.match.params.country})
    // }

    componentDidMount() {
        this.getCountry()
    }

    getCountry = () => {
        const duplicatedCountries = [...this.state.countries];
        const country = this.props.match.params.country;
        const countryFilter = duplicatedCountries.filter(c => c.cca3 === country);
        this.setState({country: countryFilter})
    }

    render() {
        console.log(this.state.country)
        return(
            <div className='CountryDetails'>
                {this.state.country.cca3}
            </div>
        )
    }
}