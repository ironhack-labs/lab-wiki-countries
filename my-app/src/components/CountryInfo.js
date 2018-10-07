import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class CountryInfo extends React.Component {
    constructor(props) {
        super(props)
        this.name = this.props.country.name.common;
        this.capital = this.props.country.capital;
        this.area = this.props.country.area
        this.borders = this.props.country.borders
        console.log(this.props.country);
    }



    render() {
        return (
            <div className='dets'>
                <h1>{this.name}</h1>
                <hr />
                <h3>Capital: {this.capital}</h3>
                <hr />
                <h3>Area: {this.area}</h3>
                <hr />
                <h3>Borders: </h3>
                <div className='borderCountries'>
                    <ul>
                        {
                        this.borders.map(e => <Link to={e}><li>{e}</li></Link>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default CountryInfo;