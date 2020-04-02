import React, {Component} from 'react';
import countriesList from '../countries.json';
import {Link} from 'react-router-dom';

class CountryDetail extends Component {
    constructor(props){
        super(props);
        this.state = {countries: countriesList}
    }

    findCountry = (c) => {
        let contr = this.state.countries.find((ctr)=> ctr.cca3 === c)
        return(contr)
    }

    render(){

        const tdStyle = {
            width: "30%"
        }

        let leCountry = this.findCountry(this.props.match.params.cca3);

        return(
            <div className="col-7">
                <h1>{leCountry.name.common}</h1>
                <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style = {tdStyle} >Capital</td>
                    <td>{leCountry.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>{leCountry.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {leCountry.borders.map((item)=>(
                                <li>
                                    <Link to = {`/country-detail/${item}`}>
                                        {this.findCountry(item).name.common}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
    
        )
    }
}

export default CountryDetail;