import React,{Component} from "react";
import countries from "../countries.json";
import CountryCard from './countryCard'

class CountryList extends Component{
    constructor(){
        super()
        this.state={
            countries:countries
        }
    }
    render(){
        return(
           this.state.countries.map((country,idx)=><CountryCard key={idx} {...country}/>)
        )
    }
}
export default CountryList