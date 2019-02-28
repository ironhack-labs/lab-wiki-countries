import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import data from '../countries.json'

class Home extends Component {
  state = {
    country: {
      name:{},
      capital:[],
      area:'',
      borders:[]
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params
    let country = data[data.findIndex(ctry => ctry.cca3 === id)]
    this.setState({ country })
  }

  componentDidUpdate(){
    let { id } = this.props.match.params
    let country = data[data.findIndex(ctry => ctry.cca3 === id)]
    if (country !== {} && this.state.country.cca3 !== country.cca3) {
            this.setState({country})
        }
    }

  render() {
    let {country} = this.state
    if (country === {}) return <div><h1>Loading</h1></div>
    let name = country.name.common
    let capital = country.capital[0]
    let {area, borders} = country

    return (
      <div className="col-7">
        <h1>{name}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borders.map((bord, index)=>{
                    let bordName = data[data.findIndex(ctry => ctry.cca3 === bord)].name.common
                    return <li key={index}>
                      <Link to={`/${bord}`}>{bordName}</Link>
                      </li>
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


export default Home
