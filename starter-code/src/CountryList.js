import React, { Component } from 'react'
import CountryItem from "./CountryItem"


export default class CountryList extends Component {
constructor(){
    super();
    
}

    render() {
        return (
           
               <ul>
                    {this.props.allcountries.map((country, idx)=>{
                        console.log(country);
                        return <li><CountryItem key={idx} idx={idx} countryInfo={country} /></li>
                    })}
                
           </ul>
            
        )
    }
}
