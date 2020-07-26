import React, { Component } from 'react'
import axios from 'axios'
import CountriesDetails from './CountriesDetails'
import { Link } from 'react-router-dom'

export class CountriesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        //BUSCAR LOS DATOS DE LA API
        //AXIOS
        axios.get("https://restcountries.eu/rest/v2")
            .then(response => {
                console.log(response.data)
                this.setState({ countries: response.data })
            })
    }

    // mostrarPais(codigoDelPais) {
    //     console.log(codigoDelPais)
    //     this.setState({ countryCode: codigoDelPais })

    // }

    render() {
        const listado = this.state.countries.map(pais => (
            <div key={pais.alpha3Code}>
                {/* <button onClick={() => this.mostrarPais(pais.alpha3Code)}>{pais.name} </button> */}
                <Link to={"/" + pais.alpha3Code} className="btn ">{pais.name}</Link>
                <hr />
            </div>
        ))


        return (
            <div>
                {listado}
           </div>
        )
    }
}

export default CountriesList
