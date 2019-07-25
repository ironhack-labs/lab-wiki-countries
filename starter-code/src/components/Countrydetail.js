import React , {Component} from 'react';

import data from '../countries.json';
import { Link } from 'react-router-dom';

class Countrydetail extends Component {

constructor(props){
  super(props)

  this.state = { 
    theCountryCode:'',
    
   allcountries: data}
}

  componentDidMount(){
   // let countryCode = this.props.match.params.idcountry;
// console.log("+++++++++ componentDidMount   country code "+ countryCode)
  //  this.setState({theCountryCode: countryCode})
}


shouldComponentUpdate(nextProps, nextState){
  let nextCountryCode = nextProps.match.params.idcountry;
  // console.log("========   shouldComponentUpdate  country code "+ countryCode);

  if( nextCountryCode !== this.props.match.params.idcountry) {
    
    
    
    this.state.allcountries.forEach((countrY)=>{
      
      if (nextCountryCode === countrY.cca3){

        console.log("=== found this country ===> " + countrY.cca3);
        this.setState({theCountryCode:countrY.cca3 });
      }
      
    })
    
  }


  return true;
}

getCountryFromCode = (codex)=>{
  console.log("get country code " + codex);
  let countryObject = {};

  this.state.allcountries.forEach((countrY)=>{
      
    if (codex === countrY.cca3){

      //console.log("=== from get country ===> " + countrY.cca3);

      countryObject.name = countrY.name.common;
      countryObject.capital = countrY.capital[0];
      countryObject.area = countrY.area;

      let allborders = countrY.borders.map( (borderz, zth)=>{
         // console.log("borderth " + borederz);
         // return (<li key={zth}  onClick={ ()=>{this.fromBordersList(codex)} }  >{borederz}</li>)
         return (<li key={zth} > <Link to={`/countrydetails/${borderz}`}>{borderz}</Link></li>)

      })

      countryObject.borders = <ul>{allborders}</ul>;
      

    }
    
  })
    return countryObject;
}

fromBordersList = (codex)=>{
  console.log("from boreder list list ......");
}

  render(){

      

    return(

      <table className="table">
      <thead>
        <tr>
          
          <th colSpan="2" className="">{this.getCountryFromCode(this.state.theCountryCode).name}</th>
         
         
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td>Capital</td>
          <td>{this.getCountryFromCode(this.state.theCountryCode).capital}</td>
         
        </tr>
        <tr>
          
          <td>Area</td>
          <td>{this.getCountryFromCode(this.state.theCountryCode).area}</td>
         
        </tr>
        <tr>
         
          <td>Borders</td>
          <td>{this.getCountryFromCode(this.state.theCountryCode).borders}</td>
        
        </tr>
      </tbody>
    </table>

    )
  }


}

export default Countrydetail;