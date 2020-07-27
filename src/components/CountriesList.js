import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class CountriesList extends Component {
    constructor(props){
        super(props)
        this.state={
            countries:[]
        }
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/')
        .then(response => {
            this.setState({
                countries:response.data
            })
        })
    }


    render() {
        const listado = this.state.countries.map(pais => (
            <div key={pais.alpha3Code}>
                <Link to={"/list/"+ pais.alpha3Code}>{pais.name}</Link>  
                <hr/>
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