import React, { Component } from 'react';
import './App.css';
import Data from './countries.json';
import { Link } from 'react-router-dom';
// import Data from './countries.json';




class CountryDetail extends Component{
  state={
    data: Data,
    cca3: this.props.match.params.theURL,
    theWholeCountryObject: null
  }

  componentWillReceiveProps(props){
    this.setState({cca3: props.match.params.theURL})
    // console.log(this.state.cca3, '-=-=-=-=-=-==-=-==-=-=-=-=-==-==-=-=');
}

loopThroughCountriesFunction = ()=>{
  this.state.data.map((country)=>{
    if(country.cca3 === this.state.cca3){
      return(
      console.log('word -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=')
      )
    }
  })
}

  
  render(){
    console.log(this.state)
    // const theURL = this.state.cca3;
    return(
      <div>
      <Link to="/"><button className='btn-primary bg-primary'>home</button></Link>

  
      
      </div>
    )
  }
}

export default CountryDetail;