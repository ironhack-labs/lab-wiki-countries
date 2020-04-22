import React, { Component } from "react";
import Countries from '../countries.json'

class Country extends Component {

    state = {
        list : Countries
    }


    render(){
        let id = this.props.match.params.id;
        let selectedCountry = this.state.list.filter(item => item.cca3 == id)

    return(
    <div>
        {selectedCountry.map((item, index) =>
        {return (
        <div key={index}> 
            <div className="title">Name</div>
            <div>{item.name.official}</div>
            <br/>
            <div className="title">Capital</div>
            <div>{item.capital}</div>
            <br/>
            <div className="title">Area</div>
            <div>{item.area} km2</div>
            <br/>
            <div className="title">Borders</div>
            {item.borders.map((item,index) => {
                return(
                    <div key={index}>
                         <a href={`/${item}`} >{item}</a>
                    </div>
                )
            })}
        </div>) })}
  
   
    </div>
    )
    }
}

export default Country