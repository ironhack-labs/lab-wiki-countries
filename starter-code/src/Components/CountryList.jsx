import React from 'react';
import { NavLink } from 'react-router-dom'

class CountryList extends React.Component {
    
    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
              
   <NavLink to={`/${this.props.abbr}`} className="list-group-item list-group-item-action">{this.props.countryName}</NavLink>


        )
    }



}

export default CountryList;