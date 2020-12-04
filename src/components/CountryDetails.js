
import { Link } from 'react-router-dom';
// import countries from '../countries.json'
import React, { Component } from 'react'

export default class CountryDetails extends Component {
   state={
     countries:null
   }
  

   render(){
     const countries = this.props.location.countryList;
    
     
    if (this.props.match&&countries) {
      const { countryCode } = this.props.match.params;
      const foundCountry = countries.find((country) => {
        return country.cca3 === countryCode;
      });
      const bordersCca3s = foundCountry.borders;
  
      const bordersCountries = countries.filter((country) => {
        if (bordersCca3s.find((cca3) => cca3 === country.cca3)) {
          return true;
        } else {
          return false;
        }
      });
  
      return (
        <div className="col-7">
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {bordersCountries.map((borderCountry) => {
                      return (
                        <li key={borderCountry.cca3}>
                          <Link to={`${borderCountry.cca3}`}>
                            {borderCountry.name.common}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      return null;
    }
   }

   componentDidMount(){
     console.log(this.props.location.countryList)
     this.setState({
       countries:this.props.location.countryList
     })
   }
  
}
// 首次渲染如何获得数据啊啊啊啊啊啊啊啊？？？？？？？？？？？