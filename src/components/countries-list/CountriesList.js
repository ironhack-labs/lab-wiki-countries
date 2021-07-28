import { Component } from 'react';
import countriesData from '../../data/countries.json';
import { Link } from 'react-router-dom';
import CountryDetails from './components/country-details/CountryDetails';

class CountriesList extends Component {
    state = {
        countries: []
    }

    componentDidMount(){
        this.setState({ countries: countriesData })
    }

    render(){
        const {countries} = this.state;

        return (
            <div className="row">
                <div clasName="col-4">
                    <ul className="list-group">
                        {countries.map(country => 
                            <Link  key={country.cca3} className="list-group-item" exact to="/{country.cca3}">{country.flag} {country.name.common}</Link>                    
                            )}
                    </ul>
                </div>  
                <div clasName="col-8">
                    <Route  exact path="/:id" component={CountryDetails} />
                </div>              
            </div>
        )
    }

}

export default CountriesList