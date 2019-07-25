import React, { Component } from 'react';
import '../../App.css';
import countries from '../../countries.json'
import { Link } from 'react-router-dom';

// import { Link, NavLink } from 'react-router-dom';


class QueryCountry extends Component{
  state = {
    allCountries: countries,
    search: ''
  }

  displayCountries = () =>{
    let clone = this.state.allCountries.filter((filterThis)=>{
      return filterThis.name.common.toLowerCase().includes(this.state.search.toLowerCase())
    })
    console.log('hi')
    return clone.map((e)=>{
      return(
        <li><Link activeclassname="active" exact to={`/countryInfo/${e.name.common}`}>{e.flag} {e.name.common}</Link></li>
      )
    })
  }
  changeText = (e) =>{
    this.setState({search: e.target.value})
  }
  render(){
    // console.log("props in the query component --------- ", this.props)

      return (
        <div className="App">
          <legend>Search</legend>
          <input onChange={this.changeText} type="search"></input>
          {this.displayCountries()}
        </div>
      );
    }
  }


export default QueryCountry;
