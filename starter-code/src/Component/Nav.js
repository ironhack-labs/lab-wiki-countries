import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import countryData from "../countries.json";

class Nav extends Component {
    constructor(props){
        super(props)

        this.state={
            countryData: countryData,
            
        }
    }
           


navbar(){
    return this.state.countryData.map((eachItem,i)=>{


       return  <div key={i}>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                
                <li><NavLink className="list-group-item list-group-item-action" exact to={"/CountryDetail/"+eachItem.cca3}/>{eachItem.name.common}</li>
        
              </div>
            </div>
            </div>
            </div>
            </div>
    });
}
   


  render() {
    return (

<div>
    {this.navbar()}
</div>


    );
  }
}

export default Nav;