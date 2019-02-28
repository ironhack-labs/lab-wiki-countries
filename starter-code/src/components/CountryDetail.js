import React from "react"
import countries from "../countries.json"

class CountryDetail extends React.Component {
  state = {
    country: {}
  }

  componentDidMount() {
    const { cca3 } = this.props.match.params
    let country = countries.find(c => c.cca3 === cca3)
    this.setState({ country })
  }
  render() {
    let { country } = this.state

    return (
      <div>
        <p>{country.cca3}</p>
        <p>{country.region}</p>
        <p>Borders: {country.borders}</p>
        {/* <ul>
          {country.borders.map(b => {
            return <li key={b}>{b}</li>
          })}
        </ul> */}
      </div>
    )
  }
}

export default CountryDetail
