import React, { Component } from 'react'
import axios from 'axios'


export default class CountryDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countryData: [],
        }
    }

    componentDidMount() {
        //buscar los datos
        axios.get(`https://restcountries.eu/rest/v2/name/${this.props.countryCode}`)
            .then(response => {
                console.log('data: ', response.data)
                this.setState({ countryData: response.data })
            })
    }



    render() {
        

        // let name = ''
        // let capital = ''
        // let region = ''
        // let borders = []
        // if (this.state.countryData.length > 0) {
        //     name = this.state.countryData[0].name
        //     capital = this.state.countryData[0].capital
        //     region = this.state.countryData[0].region
        //     borders = this.state.countryData[0].borders
        //     borders = borders.map((ele, i) => (<li>{ele}</li>))
        // }

        return (
            <div>
                <div className="col-7">
                    <h1></h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Capital</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Region</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>

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
