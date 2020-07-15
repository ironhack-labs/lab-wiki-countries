import React,{Component}from 'react';
import Cities from './../countries.json'
import './CountriesList.css';
import Detail from './CountryDetail'
import { Switch, Route } from 'react-router-dom';

class CountriesList extends Component {
    constructor(){
        super()

        this.state={

            cities:Cities

        }
    }

render(){

  return (
      
            <div>
                <nav className=" navbar navbar-dark bg-primary mb-3 ">
                    <div className="container">
                        <a className="navbar-brand" href="/">WikiCountries</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                            <div className="list-group">
                                {this.state.cities.map((elem, idx) => <a className="list-group-item list-group-item-action" href={elem.cca3} key={idx}>{elem.flag} {elem.name.common}</a>)}
                            </div>
                        </div>
                        <div className="col-7">
                            <Switch>
                                <Route exact path="/:id" render={(props) => <Detail {...props} countries={this.state.cities} />} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
    
    
  )
 }
}

export default CountriesList;
