import React, { Component } from 'react';
import CountriesList from './CountriesList';
import CountryDetail from './CountryDetail';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Countries from '../countries.json';
import axios from 'axios';

class WikiCountries extends Component{

    constructor(){
        super()
        this.state = {
            Countries: []
        }
    }

    componentDidMount() {
        console.log('>>>>>>>>componentDidMount')
        axios.get("http://localhost:4000/countries", {headers: {'Access-Control-Allow-Credentials' : true}})
        .then(response => {
            console.log('>>>>>>>>>>>>>>RESPONSE', response);
            this.setState({Countries: response.data})
        }).catch((err)=>{
            console.log('>>>>>>>>>>>>', err)
        })
    }
    
    render(){

        const findDetails = props => {

            console.log(this.state.Countries.find(c => c.cca3 === props.match.params.id))
          
            return(this.state.Countries.find(c => c.cca3 === props.match.params.id))
          
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
                            <CountriesList countries={this.state.Countries}/>
                            <Switch>
                                <Route exact path='/:id' component={(props) => <CountryDetail country={findDetails(props)} />} />  
                            </Switch>
                        </div>
                    </div>
                </div>)
    }
}

export default WikiCountries;