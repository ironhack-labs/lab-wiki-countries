import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Country extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: props.data
    }
  }
  render() {
    return (
      <div>
        <table>
          <tr>
            {this.state.countries.map((country, index) => {
              return <p key={index}><Link to={`/countries/${country.cca3}`}>{country.flag} {country.name.common}</Link></p>
            })}
          </tr>
        </table>
      </div>

    )
  }
}
export default Country


  // render() {
  //   return (
  //     <div>
  //       {this.state.countries.map((country, index) => {
  //         return <p key={index}><Link to={`/countries/${country.cca3}`}>{country.name.common}</Link></p>
  //       })}
  //     </div>
  //   )
  // }
  // }
  // export default Country

