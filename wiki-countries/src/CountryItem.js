import React from "react";
import { Link } from 'react-router-dom';



export default class CountryItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {};    
  }


  render(){
    return(
      
      <li className="list-group-item list-group-item-action"><Link to={'/'+ this.props.name}>{this.props.name}</Link></li>

    )
  }

}