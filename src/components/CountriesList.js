import React, {Component} from 'react'

import countries from '../countries.json'
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './CountryDetail';





//creo la clase de countriesList

class CountriesList extends Component {
    constructor(){
        super ()
        this.state ={
            countries
        }
    }

    render(){
        return(
            <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container">
             <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
            </nav>
                <div className= "container">
                    <div className="row">
                    <div className = "col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                        {this.state.countries.map((e,index)=>
                        <div key={index}>
                            <Link to ={e.cca3}>{e.flag} {e.name.common}</Link>
                            </div>
                         )}

                    </div>
                    <div className= "col-7">
                        <Switch>
                            {/* aqui deberia estar mi ruta */}
                            <Route exact path="/:cca3" component={CountryDetail}></Route>
                        </Switch>
                    </div>
                   </div> 
                   
                </div>
            </div>
        )
    }

}


export default CountriesList