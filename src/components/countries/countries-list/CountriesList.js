import dataCountries from '../../../data/countries.json';
import {Component} from 'react';
import Country from '../country/Country';


class CountriesList extends Component {

    state = {
        countries : []
    }

    componentDidMount () {
        this.setState({
            countries: dataCountries
        })
    }

    render() {
        const {countries} = this.state;
        return (
            <ul>
                {countries.map(countrie => 
                <Country {...countrie} />)
                }
            </ul>
        )
    }
}

export default CountriesList;