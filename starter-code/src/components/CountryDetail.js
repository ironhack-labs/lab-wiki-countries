import React, { Component, Fragment } from 'react';
import data from '../countries.json';

class CountryDetail extends Component {
    state = {
        country: {}
    }
    componentDidMount() {
        this.fetchCountry(this.props.match.params.code)
    }

    // Esto solo se llama cuando el componente ya se monto y va a cambiar de estado
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.country.code !== nextProps.match.params.code) {
            this.fetchCountry(nextProps.match.params.code)
            return true
        }

        return false
    }

    fetchCountry = (code) => {
        if(code) {
            const res = data.filter ( country => {
                return country.cca3 === code
            })

            const obj = {}
            obj.flag = res[0].flag;
            obj.name = res[0].name.common;
            obj.capital = res[0].capital[0];
            obj.area = res[0].area;
            obj.borders = res[0].borders.length > 0 ? res[0].borders : false;
            obj.code = res[0].cca3

            this.setState({
                country: obj
            })
        }
    }

    render() {
        
        return(
            <div className="row">
                <div className="col-12 info-country">
                    <div className="row">
                        <div className="col-12">
                            <h2>{this.state.country.name}</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <p><b>Capital: </b> {this.state.country.capital}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <p><b>Area: </b>{this.state.country.area} km2</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            {
                                this.state.country.borders &&
                                <Fragment>
                                    <p><b>Borders: </b></p>
                                    <ul>
                                        {
                                            this.state.country.borders.map( (border, index) => <li key={index}>{border}</li>)
                                        }
                                    </ul>
                                </Fragment>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountryDetail;