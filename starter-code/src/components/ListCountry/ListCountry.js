import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './ListCountry.css';

class ListCountry extends Component {
  displayCountry = (datas, data) => {
    const { cca3 } = this.props.match.params;
    const country = this.props.countries.find(country => country.cca3 === cca3);
    console.log(country.borders)
    return country[datas] 
  }

  listBorders = () => {
    const { cca3 } = this.props.match.params;
    const country = this.props.countries.find(country => country.cca3 === cca3);
    const { borders } = country;
    return borders.map((cca3) => {
      const countr = this.props.countries.find(countr => countr.cca3 === cca3);
      return (
        <li key={cca3}><Link to={`/${cca3}`}>
        {countr.name.official}
        </Link></li>
      );
    });
  }
  
  render() {
    return(
        <div class="col-7">
            <h1>{this.displayCountry('capital')}</h1> {/*como retornar name.official?*/}
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="width-30">{this.displayCountry('capital')}</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.displayCountry('area')}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {this.listBorders()}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        
    );
  };
} ;

export default ListCountry;