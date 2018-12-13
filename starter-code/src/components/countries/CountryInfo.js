import React, {Component} from "react"
import countries from "../../countries.json"

class CountryInfo extends Component {
  state = {
    countries
  }

  componentDidMount() {
    const {name} = this.props.match.params
    this.setState({name})
    let country = countries.filter(country => {
      return country.name.common === name
    })
    console.log(country[0].name.common)
  }

  render() {
    const{name} = this.state

    return(
      <div>
        <h1>Detail</h1>
      </div>
    )
  }
}

export default CountryInfo