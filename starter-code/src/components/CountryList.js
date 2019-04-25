import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CountryList extends Component {

  constructor(props) {
    super(props);
  };

  render(){

  return(

    <div>



  <li className="list-group-item"><NavLink to={this.props.cca3} activeClassName="active" >
  
  {this.props.flag} - {this.props.name.common} </NavLink></li>


    </div>

  )
}
};

export default CountryList;