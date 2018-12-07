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
    this.setState({
      cca3: props.match.params.theURL,
      theWholeCountryObject: this.yoMan(),
    
    
    
    })
    if(this.state.cca3 === this.props.match.params.theURL){
    console.log(this.props.match.params.theURL, this.state.cca3)
      this.yoMan();
    // return(
    //   <div>
    //     {this.state.data.borders}
    //   </div>
    
  }
    // else{ 
    // console.log(this.props.match.params.theURL,"_+_+_+_+_+_+_+_+_+_+_+", this.state.cca3 );
    // }

    // console.log(this.state.cca3, '-=-=-=-=-=-==-=-==-=-=-=-=-==-==-=-=');
}




// loopThroughCountriesFunction = ()=>{
//   this.state.data.map((country)=>{
    // if(country.cca3 === this.state.cca3){
    //   return(
      // console.log('word -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=', this.state.cca3, "_+_+_+_+_+_+_+_+_+_+_+", this.state. )
      // )
//     }
//   })
// }
yoMan = ()=>{
  console.log('yo man', );
  // this.state.data.map((countryInfo, index)=>{
    // console.log(countryInfo, this.state.data)
    return(
      
      <div>
      <div>hey</div>
      {/* <div>{countryInfo.borders}</div> */}
      </div>
      
    )
    
  // })
  //   return(
  //   
  // )
}

  render(){
    console.log(this.state)
    // const theURL = this.state.cca3;
    return(
      <div>
      <div>{this.state.theWholeCountryObject}</div>
      <div>
         
      <Link to="/"><button className='btn-primary bg-primary'>home</button></Link>
 
  
      
      </div>
      </div>
    )
  }
}

export default CountryDetail;