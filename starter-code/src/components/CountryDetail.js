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
                            {this.props.country.map((country, idx) => 
                                <ul >
                                    <li className='text-left '><span key={idx} onClick= {() => this.handleChange(idx)}>{country.flag} {country.name.official}</span></li>
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
                                    <ul>
                                        <li>{this.state.borders}</li>
                                    </ul>
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

{/*  */}

//* 
// <!-- Grid: https://getbootstrap.com/docs/4.0/layout/grid/#setting-one-column-width -->
// <div class="row">
//   <div class="col-5">Column 5/12</div>
//   <div class="col-7">Column 7/12</div>
// </div>

// // <!-- List group: https://getbootstrap.com/docs/4.0/components/list-group/#links-and-buttons -->
// <div class="list-group">
//   <a href="#" class="list-group-item list-group-item-action active">Cras justo odio (active)</a>
//   <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
//   <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
//   <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
//   <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
// </div>

