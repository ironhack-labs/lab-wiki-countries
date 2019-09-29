import React from 'react';
import { NavLink } from 'react-router-dom'

class CountryList extends React.Component {
    
    render(){
        return (
            
   <NavLink to={`/${this.props.abbr}`} className="list-group-item list-group-item-action">
      <span className="theMiniFlag"><img src={`https://www.countryflags.io/${this.props.abbr}/flat/64.png`} width="20px" alt="theFlag"></img></span>
   <span className="theCountryName">{this.props.countryName}</span>
   </NavLink>


        )
    }



}

export default CountryList;