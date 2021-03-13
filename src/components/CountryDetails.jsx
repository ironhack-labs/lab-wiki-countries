import React, { Component } from 'react';
import countries from './../countries.json';

class CountryDetails extends Component {
    state = {
        country: null
      };

      componentDidMount() {
        this.loadCountry();
      }

      componentDidUpdate(previousProps, previousState) {
        if (this.props.match.params.cca3 !== previousProps.match.params.cca3) {
          this.loadCountry();
        }
      }
    
      loadCountry = () => {
        const country = countries.find(country => country.cca3 === this.props.match.params.cca3);
        this.setState({
          country: country
        });
      };


    render() {
        return (
            <div>
            {this.state.country && (
              <div>
                <h1>{this.state.country.name.common}</h1>
                <h3>{this.state.country.subregion}</h3>
                <h3>{this.state.country.capital}</h3>
                <span>{this.state.country.languages}</span>
                <span>{this.state.country.flag}</span>                
              </div>
            )}
          </div>
        )
    }
}

export default CountryDetails
