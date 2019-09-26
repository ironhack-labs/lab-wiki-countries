// import React, { Component } from 'react'
// import { Layout, Descriptions } from 'antd'
// import { Link } from 'react-router-dom'
// import countries from './../countries.json'

// const { Content } = Layout

// class Country extends Component {
//   state = {
//     country: undefined
//   }

//   componentWillMount() {
//     const { cca3 } = this.props.match.params

//     this.setState(() => {
//       const country = countries.find(country => {
//         return country.cca3 === cca3
//       })

//       return { country }
//     })
//   }

//   componentWillUpdate = prevProp => {
//     const { cca3 } = prevProp.match.params
//     if (this.props.match.params.cca3 !== cca3) {
//       this.setState(() => {
//         const country = countries.find(country => {
//           return country.cca3 === cca3
//         })
//         console.log(country)
//         return { country }
//       })
//     }
//   }

//   getBorders = () => {
//     const { borders } = this.state.country

//     return borders.map(border => {
//       const country = countries.find(country => {
//         return country.cca3 === border
//       })

//       return (
//         <li key={country.cca3}>
//           <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
//         </li>
//       )
//     })
//   }

//   render() {
//     const { country } = this.state
//     return (
//       <Content
//         style={{
//           background: '#fff',
//           padding: 24,
//           margin: 0,
//           minHeight: 280
//         }}
//       >
//         <h2>{country.name.common}</h2>
//         <Descriptions title="Country info" bordered>
//           <Descriptions.Item label="Capital">{country.capital}</Descriptions.Item>
//           <Descriptions.Item label="Area">{country.area} km2</Descriptions.Item>
//           <Descriptions.Item label="Borders">{this.getBorders()}</Descriptions.Item>
//         </Descriptions>
//       </Content>
//     )
//   }
// }

// export default Country

import React from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries.json'
import '../App.css'

const CountryDetail = props => {
  const getCountry = cca3 => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3
    }
    return countries.find(theCountry)
  }

  const foundCountry = getCountry(props.match.params.cca3)
  console.log(foundCountry)

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td className="thirty">Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((country, idx) => {
                  let realCountry = getCountry(country)
                  return (
                    <li key={idx}>
                      <Link to={`/countries/${realCountry.cca3}`}>{realCountry.name.common}</Link>
                    </li>
                  )
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetail
