import React, {Component} from 'react'
import '../App.css'
import { NavLink }  from 'react-router-dom'
import Countries from '../../countries.json'
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './CountryDetails'
class CountriesList extends Component{

    constructor(){

        super()

        this.state={

            countries : Countries
        }

    }


    render(){

        return(

            <>
           
            <div className="panel panel-primary" id="result_panel">
            <div className="panel-body">
            <ul className="list-group">
            {this.state.countries.map(elm => <li className="list-group-item">{elm.flag}<NavLink to ={elm.cca3}>{elm.name.official}  </NavLink></li>)}
            </ul>
            </div>
            </div>
            </>

        )

    }
}

export default  CountriesList