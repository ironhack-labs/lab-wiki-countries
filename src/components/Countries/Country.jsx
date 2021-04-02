import React, { Component } from 'react'
import { getOneCountry, getOneBorder } from '../../services/baseService'
import { Link } from 'react-router-dom'
import Map from '../Map/Map'

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
                    ? (<p>Loading...</p>)
                    : (
                        <>
                            <h2>{country.name}</h2>
                            <img src={country.flag} alt={`Flag of ${country.name}`} style={{width: 180}}/>
                            <p>Native name: {country.nativeName}</p>
                            <p>Capital: {country.capital}</p>
                            <p>☎️ {country.callingCodes.map((num) => <span key={num}>{num}</span>)}</p>
                            <p>{country.area}</p>
                            {country.borders.map((bor) => (
                                <div key={bor}>
                                    <Link to={`/detail/${bor}/country`} >{bor}</Link>
                                </div>
                            ))}
                            <Map lon={country.latlng[0]} lat={country.latlng[1]}/>
                        </>
                    )
                }
            </div>
        )
    }
}

export default Country