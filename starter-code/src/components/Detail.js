import React, { Component } from 'react'
import axios from 'axios'

export default class Detail extends Component {
    state = {
        name: '',
        capital: '',
        area: '',
        borders: []
    }

    componentDidMount = async (props) => {
        let {country} = this.props.match.params
        let {data} = await axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
        console.log(country)
        data.map(el => {
            if (country === el.name.common) this.setState({name: el.name.common, capital: el.capital[0], area: el.area, borders: el.borders})
        })
    }

    render() {
        return (
            <div style={{
                display:'flex',
                alignSelf: 'flex-end',
                width: '30%',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'}}>
                <h2>{this.state.name}</h2>
                <h4>Capital: <p>{this.state.capital}</p></h4>
                <h4>Area: <p>{this.state.area} km^2</p></h4>
                <h4>Borders:</h4>
                <ul>
                    {this.state.borders.map((el, index) => (<li key={index}>{el}</li>))}
                </ul>
            </div>
        )
    }
}
