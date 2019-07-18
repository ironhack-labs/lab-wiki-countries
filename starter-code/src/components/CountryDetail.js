import React, {Component} from 'react'
import data from '../countries.json'
import {Link} from 'react-router-dom'

class countryDetail extends Component{
  state={
    country: {}
  }

  // componentDidMount(){
  //   const {id} = this.props.match.params
  //   const findCountry = data.find(country => country.cca3===id)
  //   this.setState({ country:findCountry })
  //   console.log(find)
  //   console.log(this.state.country)
  // }

  getCountry(id){
    const compareCountry = country => {
      return country.cca3 === id;
    }
    return data.find(compareCountry)
  }

  render(){
    //const { country } = this.state
    const {id} = this.props.match.params
    const findCountry = data.find(country => country.cca3===id)
    return(
      <>
      <div class="col-7">
            <h1>{findCountry.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{findCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{findCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {findCountry.borders.map(border=>(
                        <Link to={`/country/${border}`}>
                        <button class="list-group-item list-group-item-action">{this.getCountry(border).name.common}</button>
                        </Link>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </>
    )
  }
}

export default countryDetail