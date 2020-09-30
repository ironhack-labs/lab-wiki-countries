import React from 'react';
import CountriesData from '../countries.json';
import CountryLink from './CountryLink';

class CountryDetails extends React.Component {
  state = {
    country: null,
  };

  componentDidUpdate() {
    
    if(this.state.country?.cca3 !== this.props.match.params.id)
    {
      const countrySelected = CountriesData.find((el) => {
        return el.cca3 === this.props.match.params.id;
      });
  
      this.setState({
        country: countrySelected,
      });
    }
  }

  render() {

    if(!this.state.country) {
      return <div>No Country Selected</div>
    }

    return (
      <div className="container col-8 pl-5">
        <div className="row border-bottom">
          <h1 className="text-left">{this.state.country?.name.common}</h1>
        </div>
        <div className="row border-bottom">
          <p className="text-left">Capital {this.state.country?.name.common}</p>
        </div>
        <div className="row border-bottom">
          <p className="text-left">Area {this.state.country?.area} km2</p>
        </div>
        <div className="row">
          <p className="text-left col-2 p-0">Borders</p>
          <ul className="text-left mx-auto col-6">
            {this.state.country?.borders.map((border) => {
              const countryFound = CountriesData.find((borderCountry) => {
                return borderCountry.cca3 === border;
              });
              return (
                <li>
                  <CountryLink country={countryFound} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CountryDetails;
