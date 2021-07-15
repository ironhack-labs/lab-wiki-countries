import axios from 'axios'
import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import Card from '@material-ui/core/Card';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class CountryDetails extends Component {

    state = {
        countryDetails: null
    }

    getData = async () => {

        let cca3 = this.props.match.params.cca3

        let response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${cca3}`)

        let country = {
            id: this.props.match.params.cca3,
            flag: response.data.flag,
            name: response.data.name,
            capital: response.data.capital,
            area: response.data.area,
            borders: response.data.borders
        }

        this.setState({
            countryDetails: country
        })
    }

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate() {
        let newId = this.props.match.params.cca3
        let stateId = this.state.countryDetails.id
        if (newId !== stateId) {
            this.getData()
        }
    }

    render() {
        if (!this.state.countryDetails) {
            return <p>Loading Details. . .</p>
        }

        const {countryDetails} = this.state

        return (
            <div class="col-7">
                <Card component={countryDetails.name}>
                <TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="right">
                            <td>Capital:  </td>
                            <br />
                            <td>{ countryDetails.capital}</td>
                            
                        </TableCell>
                        
                        
                        <TableCell align="right">
                            <td>Area:</td>
                            <br/>
                            <td>{countryDetails.area} km<sup>2</sup></td>
                        </TableCell>
                        
                        
                        <TableCell align="right">
                            <td>Borders: </td>
                        
                            <td>
                                <ul>
                                    {countryDetails.borders.map((border) => {
                                        return <li>{border}</li>
                                    })}
                                </ul>
                            </td>
                            </TableCell>
                            </TableRow>
                        </TableBody>
                        </TableHead>
                </Card>
            </div>
        )
    }
}

export default CountryDetails; 