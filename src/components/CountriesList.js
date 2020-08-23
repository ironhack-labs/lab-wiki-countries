import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

import Switch from './Switch'
import 'bootstrap/dist/css/bootstrap.css';


export default class CountriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }

    }

    componentDidMount() {
        axios.get("https://restcountries.eu/rest/v2")
            .then(response => {
                this.setState({
                    countries: response.data
                })
            })
    }


    render() {
        const listado = this.state.countries.map(pais => (
            <div key={pais.name} >
                <h1 onClick={() => this.paisDetails(pais.name)}>
                    <img className="flag" src={pais.flag} alt="flag" />
                    {pais.name} </h1>
                <hr />

            </div>
        ))
        let paisDetails = ""
        if (this.state.countryName) {
            paisDetails = <Switch key={this.state.countryName} countryName={this.state.countryName}> </Switch>
        }
        return (
            <div>
                {paisDetails}
                <Table striped bordered hover variant="dark" className='countriesTable'>

                    <tbody>
                        <tr>{listado}</tr>
                    </tbody>
                </Table>

            </div>



        )
    }
}
