import React, { Component } from 'react';
import CountriesList from './CountriesList';
import CountryDetail from './CountryDetail';
import { Switch, Route, Redirect } from 'react-router-dom';
import Countries from '../countries.json';


class WikiCountries extends Component{
    
    render(){

        const findDetails = props => {

            console.log(Countries.find(c => c.cca3 === props.match.params.id))
          
            return(Countries.find(c => c.cca3 === props.match.params.id))
          
          }

        return (<div id="root">
                    <div>
                        <nav class="navbar navbar-dark bg-primary mb-3">

                            <div class="container">

                            <a class="navbar-brand" href="/">WikiCountries</a>

                            </div>

                        </nav>
                    </div>

                    <div class="container">

                        <div class="row">                            
                            <CountriesList countries={Countries}/>
                            <Switch>
                                <Route exact path='/:id' component={(props) => <CountryDetail country={findDetails(props)} />} />  
                            </Switch>
                        </div>
                    </div>
                </div>)
    }
}

export default WikiCountries;