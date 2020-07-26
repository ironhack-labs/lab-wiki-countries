import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
//import Switch from './Switch'


export default class CountriesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            countries: []
        }
        
    }

    componentDidMount(){
        axios.get("https://restcountries.eu/rest/v2")
        .then(response => {
            this.setState({
                countries: response.data
            })
        })
    }
    showDetails(countryName) {
        this.setState({
            countryCode: countryName
        })
    }
    
    render() {
        const listado = this.state.countries.map(pais => (
            <div key={pais.name} >
                  <h1  >{pais.name} </h1>
                <hr/>

            </div>
        ))
        //let countryDetails = " "
        //if(this.state.countryName) {
        //    countryDetails =  <Switch key={this.state.countryName} countryName={this.state.countryName} />
        //}
        return (
            
            <Table striped bordered hover variant="dark" className='countriesTable'>
            
            <tbody>
            <td>{listado}</td>
            </tbody>
            </Table>              
            
        )
    }
}
