import React, {Component} from 'react'
import countries from '../countries.json'
import { Link } from "react-router-dom";

class CountryList extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            countries.map((country,index)=>{
                return  <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action active">{country.name.common}</Link>
        
              })
        )
    }
}
export default CountryList