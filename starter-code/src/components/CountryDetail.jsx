import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// import countriesData from "../countries.json";


class CountryDetail extends Component {

  constructor(props){
    super(props)
    this.state = {
        countriesData: []
    };
  };

  componentDidMount() {
    debugger
    axios.get("https://countries.tech-savvy.tech/countries")
    .then(response => {
        this.setState({countriesData: response.data})
    })
    .catch((err) => {
      console.log(err);
    });
  };

  render() {

    var countryObj = this.state.countriesData.find((country) => {
      return country.cca3 === this.props.match.params.cca3;
    });  

    // Check if countryObj was created successfully (won't be on first run!)
    if(!countryObj) {  // Is this good practice? Or should countryObj be part of state too. Otherwise the below throws errors if countryObj is undefined
      return null;
    } else {
      return (
        <div className="col-7">
  
          <h1>{countryObj.name.common}</h1>
  
          <table className="table">
  
          <thead></thead>
            <tbody>
              <tr>
                <td style={{width: '30%'}}>Capital</td>
                <td>{countryObj.capital}</td>
              </tr>
  
              <tr>
                <td>Area</td>
                <td>{countryObj.area} km
                  <sup>2</sup>
                </td>
              </tr>
  
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {countryObj.borders.map((element, index) => {
                      return (
                        <li key={index}><Link to={'/country/' + element}>{element}</Link></li>
                        )
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
  
          <Link to='/'><Button>Home</Button></Link>
  
        </div>
      );  
    };
    
  }
}

export default CountryDetail;