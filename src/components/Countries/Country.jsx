import React, { Component } from 'react'
import { getOneCountry } from '../../services/baseService'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import Map from '../Map/Map'
import './Country.scss'

class Country extends Component {
    state = {
        country: [],
        loader: true
    }
    
    componentDidMount() {
        this.getCountry()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.name !== this.props.match.params.name) {
          this.setState({ loader: true })
        }
        if (this.state.loader) {
            this.getCountry()
        }
    }

    getCountry = () => {
        const name = this.props.match.params.name
            getOneCountry(name)
            .then(response => {
                this.setState({ country: response, loader: false })
            })
    }

    render() {
        const country = this.state.country
        return (
            <div className="Country">
                <div id="map"></div>
                {
                    this.state.loader 
                    ? (<div className="d-flex justify-content-center spin p-5">
                        <ClipLoader color={"rgb(46, 112, 46)" }/>
                        </div>)
                    : (
                        <div className="container p-5">
                        <div className="row d-flex align-items-center">
                        <hr/>
                            <div className="col">
                                <h3>{country.name}</h3>
                                <p><small><i>{country.nativeName}</i></small></p>
                            </div>
                            <div className="col d-flex justify-content-end mb-3">
                                <img src={country.flag} alt={`Flag of ${country.name}`} style={{width: 140}}/>
                            </div>
                        <hr/>
                        </div>
                            <p><b>Capital: </b>{country.capital}</p>
                            <p><b>Area: </b>{country.area} km²</p>
                        <div className="row d-flex align-items-start mb-3">
                            <div className="col-2">
                                <p><b>Borders:</b></p>
                            </div>
                            {country.borders.map((bor) => (
                                <div className="col-1 mb-3" key={bor}>
                                    <Link to={`/detail/${bor}/country`} className="borderCodes">{bor}</Link>
                                </div>
                            ))}
                        </div>
                        <Map lon={country.latlng[0]} lat={country.latlng[1]}/>
                        <div/>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Country