import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CountryList extends Component {

  constructor(props) {
    super(props);
  };

  render(){

  return(



<div className="col-4" style={{maxHeight: '90vh', overflow: 'scroll'}}>

{
  this.props.countries.map((oneCountry, index) => {
    return   <NavLink to={`/${oneCountry.cca3}`} className="list-group-item" activeClassName="active" >
  
  {oneCountry.flag} - {oneCountry.name.common} </NavLink>


  })
}


</div>




  )
}
};

export default CountryList;