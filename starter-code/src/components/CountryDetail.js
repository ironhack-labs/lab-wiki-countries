import React, { Component } from 'react'
import axios from 'axios'


class CountryDetail extends Component {

  state = {
    name: '',
    capital: '',
    area: 0,
    borders: []
  }

  componentDidMount = async (props) => {

    let { country } = this.props.match.params
    let { data } = await axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
  
    data.map(element => {
      if (country === element.name.common) {
        return this.setState({name: element.name.common, capital: element.capital[0], area: element.area, bordes: element.borders})
      }
    })
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        alignSelf: 'flex-end',
        width: '30%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'}}>
        <h2>{this.state.name}</h2>
        <h3>Capital: {this.state.capital}</h3>
        <h3>Area: {this.state.area} km2</h3>
        <ul>
          {this.state.borders.map((element, index) => <li key={index}>{element}</li>)}
        </ul>
      </div>
    )
  }
}

export default CountryDetail