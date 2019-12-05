import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json' ;

export default class CountryDetailComp extends Component {
    state = {
        country: {},
        borders:[]
    }

    componentDidMount() {
        const country = countries.find(
            country => country.cca3 === this.props.match.params.cca3
        )
        console.log(this.props.match.params.cca3)
        this.setState({ country })
    }

    render() {
        // console.log(countries)
        // console.log(this.state)
        const { country } = this.state

        const { borders } = country;
        console.log(borders)

        //Este map va en el return de abajo, pero me da error entonces por eso lo comenté aca arriba
        // {borders.map(border => (
        //     <Link key={border.cca3} to={`/country/${border.cca3}`}>
                
        //     </Link>
        // ))}
        return (
            <div>
                <h2>{ country.capital }</h2>
                { country.flag }
                <h4>Area {country.area} km2</h4>
                <h4>

                </h4>
               
            </div>

        )
    }
}