import React, {Component} from 'react';
import countries from '../../countries'
import Countries from "./Countries";


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {countries};
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-primary mb-3">
                    <h2 className="navbar-brand">WikiCountries</h2>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <Countries countries={this.state.countries}/>
                        </div>
                        <div className="col-7">
                            <p>Click on a country</p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Home;