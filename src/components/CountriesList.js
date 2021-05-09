import React, { Component } from 'react';
import countriesArr from '../countries.json';

class CountriesList extends Component{
    constructor(){
        super();
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        this.setState({
            countries: countriesArr,
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                        <div className="list-group">
                            {this.state.countries.map((item) => {
                                return(
                                    <a className="list-group-item list-group-item-action" href={`/${item.cca3}`}>{item.flag} {item.name.common}</a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountriesList;