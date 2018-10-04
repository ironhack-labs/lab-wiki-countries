import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import paises from '../countries.json'

import Nav from './Nav';
import Routes from '../Routes';

class App extends Component{

    state = {
        paises
    }

    render(){
        return(
            <div className="Page">
                <div className="Title">WikiCountries</div>
                <div className="App">
                    <section className="lista">
                        <Nav info={this.state.paises} />
                    </section>
                    <section className="detalle">
                        <Routes />
                    </section>
                </div>
            </div>
            
        );
    }
}

export default withRouter(App);