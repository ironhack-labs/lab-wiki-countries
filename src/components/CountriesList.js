import { Component } from "react";
import list from '../countries.json'
import {NavLink} from 'react-router-dom'

class CountriesList extends Component {

    state = {
        countries:[...list],
        
    }
    
    render(){
        return(<ul className="list-group ">{this.state.countries.map((element)=>{
            return <li key={element.cca3} className="list-group-item px-0 p-0"><NavLink className="nav-link"to={{pathname:`/${element.cca3}`, state:{name:element.name.common, borders:element.borders, area:element.area, capital:element.capital, cca3:element.cca3}}} activeClassName="active-country"> <img className="flag-img" src={`https://www.countryflags.io/${element.cca2}/flat/64.png`} alt={element.cca2}/>{element.name.common}</NavLink></li>
        })}</ul>)
    }


}
    


export default CountriesList;