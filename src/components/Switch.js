import React, { Component } from 'react'
import axios from 'axios'


export default class Switch extends Component {
    constructor(props) {
        super(props)
        this.state= {
            countryData: []
        }
    }
    componentDidMount(){

        axios.get("https://restcountries.eu/rest/v2")
        .get("https://restcountries.eu/rest/v2/name/" )
        .then(response => {

            let unPais = response.data.find(item => item.name === this.props.countryName)
            this.setState({
                countryData: unPais
            })
        })
    }
    
    


    render() {
        
        return (
            <div className="switch" >
            <h1>Name:{this.state.countryData.name}</h1>
            <hr/>
            <h2>Capital:{this.state.countryData.capital} </h2>
            <hr/>
            <h2>Area:{this.state.countryData.area} </h2>
            <hr/>
            <h2>Borders: </h2>
            <ul>
                <li>{this.state.countryData.borders}</li>
            </ul>

                
            </div>
        )
    }
}
