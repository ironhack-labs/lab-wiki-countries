import React, { Component } from "react";

class CountryDetail extends Component {
    state = {
        country: this.props.country[0],
        idx: 0,
        borders: this.props.country[0].borders[0]
    }

    handleChange = (idx) => {
        this.setState({country: this.props.country[idx]})
    }

    render() {
        return (
            <div className='country-list'>
                <a href="#" className="list-group-item list-group-item-action active ">WikiCountries</a>
                <div className="row">
                    <div className="col-5">
                        <div className="list-group">
                            {this.props.country.map((country, index) =>
                                <ul key={index} >
                                    <li className='text-left '><span onClick= {() => this.handleChange(index)}>{country.flag} {country.name.official}</span></li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="col-7 country-detail">
                        { <div className=''>
                            {this.state.country ? <h1 className='text-left'>{this.state.country.name.common}</h1>  : 'No hay'}
                            <hr/>
                            <div className="row capital">
                                <div className="col-2 text-left">
                                    <h5>Capital: </h5>
                                </div>
                                <div className="col-10 text-left">
                                    <p>{this.state.country.capital} </p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-2 text-left">
                                    <h5>Area: </h5>
                                </div>
                                <div className="col-10 text-left">
                                    <p>{this.state.country.area} km2</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-2 text-left">
                                    <h5>Borders: </h5>
                                </div>
                                <div className="col-10 text-left list-group">
                                {
                                  this.state.country.borders.map((border,index)=>
                                    <ul key={index}>
                                        <li>{border}</li>
                                    </ul>
                                  )
                                }

                                </div>
                            </div>
                        </div> }
                    </div>
                </div>

            </div>
        )
    }
}

export default CountryDetail;
