import React, { Component } from 'react';
import countriesArr from '../countries.json';

class CountryDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            country: {
                name: {},
                capital: [],
                borders: [],
            }
        }
    }

    componentDidMount() {
        const cca3 = this.props.match.params.cca3;
        const country = countriesArr.find((item) => {
            if (cca3 === item.cca3){
                return true;
            } else {
                return false;
            }
        });

        this.setState({
            country: country,
        });
    }

    render(){
        return(
            <div class="col-7">
                <h1>{this.state.country.name.common}</h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        {this.state.country.capital.map((item) => {
                            return(
                                <td>{item}</td>
                            )   
                        })}
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{this.state.country.area} km<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                        <ul>
                        {this.state.country.borders.map((item) => {
                            return (
                                <li><a href={`/${item}`}>{countriesArr.find(c => (c.cca3 === item)).name.common}</a></li>
                            );
                        })}
                        </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CountryDetails;
