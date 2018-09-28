import React, { Component } from 'react';
import allCountries from './countries.json';
import { Link } from 'react-router-dom';
import '../App.css';

class CountryDetail extends Component {
  constructor(props){
    super(props)
  }

  getCountry = (id) =>{
    return allCountries.find((oneCountry)=>{
      return oneCountry.cca3 === id
    })
  }



  render() {

    const actualCountryDetail = this.getCountry(this.props.match.params.id)
    console.log("carajo", actualCountryDetail)
  actualCountryDetail
    // actualCountryDetail.borders.map((one)=>{
    //     console.log('1', one)
    // })

    const newCountry= actualCountryDetail.borders.map((one)=>{
      return(
        <ul>
          <Link to={`/country/${this.getCountry(one).cca3}`}> <li className="newLi"> {this.getCountry(one).name.common}  </li>  </Link>

        </ul>
        
      )
    // console.log("pais1",this.getCountry(one).cca3)
    })

    return (
      <div>



        <h1>Country</h1>
        <p>{actualCountryDetail.name.common}</p>
        <h3>Capital</h3>
        <p>{actualCountryDetail.capital}</p>
        <h3>Area</h3>
        <p>{actualCountryDetail.area}</p>
        <h3>Borders</h3>
        {newCountry}
      </div>
    );
  }
}

export default CountryDetail;
