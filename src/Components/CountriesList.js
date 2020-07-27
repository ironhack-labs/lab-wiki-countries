import React, { Component } from 'react'
import axios from 'axios'
import CountryDetail from './CountryDetail'
import { Link } from 'react-router-dom';




export default class CountriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            countryCode: ''
        }
    }


    componentDidMount() {  //se executa uma vez, ao criar o componente. Assim, o componente já é criado com os dados necessários. 
        //buscar dados da API. Para isso, Axios (deve ser instalado):
        axios.get('https://restcountries.eu/rest/v2')//get pede a url - lista completa dos países. Devolve uma promisse
            .then(response => {
                console.log(response.data)
                this.setState({
                    countries: response.data
                })
            })
        this.showDetails = this.showDetails.bind(this)
    }

    showDetails(codigoDelPais) {
        console.log(codigoDelPais)
        this.setState(
            {
                countryCode: codigoDelPais
            }
        )
    }


    render() {

        const allCountries = this.state.countries.map((pais, i) => (
            <Link to={`/${pais.alpha3Code}`} key={i} style={{ textDecoration: 'none', color: 'black', margin: 10, }} onClick={() => this.showDetails(pais.alpha3Code)}>{pais.name} <img style={{ width: 20 }} src={pais.flag} alt={pais.name} /></Link>
        ))

        let details = ''
        if (this.state.countryCode !== '') {
            details = <CountryDetail key={this.state.countryCode} showDetails={this.showDetails} countryCode={this.state.countryCode} />
        }
        return (

            <div>
                <nav className="navbar fixed-top navbar-dark bg-primary mb-3">
                    <div className="container">
                        <a className="navbar-brand" href="/">WikiCountries</a>
                    </div>
                </nav>
                <div className="container mainContainer" >
                    <div className="row">
                            <div className="col-5">
                                <div className="list-group" >
                                    {allCountries}
                                </div>
                            </div>
                        {details}
                    </div>
                </div>
            </div>
        )
    }
}
