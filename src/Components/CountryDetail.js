import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';



export default class CountryDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countryData: {
                borders: []
            }
        }
    }

    componentDidMount() {
        //buscar os dados deste país
        axios.get(`https://restcountries.eu/rest/v2/alpha/${this.props.countryCode}`)
            .then(response => {
                console.log("Dados em response.data ", response.data)
                this.setState(
                    {
                        countryData: response.data
                    })
            })
    }

    render() {
        console.log('props: ', this.props.countryCode);
        let borders = this.state.countryData.borders.map((ele, i) => {
            console.log('ele:', ele)
            return (<Link to={`/${ele}`} onClick={()=>this.props.showDetails(ele)} key={i} style={{ textDecoration: 'none', color: 'black', }}><li>{ele}</li></Link>)
        })


        return (
            <div>
                <div className="col-7">
                    <h1>{this.state.countryData.name}</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '30%' }}>Capital</td>
                                <td>{this.state.countryData.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{this.state.countryData.area} km
                        <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {borders}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
