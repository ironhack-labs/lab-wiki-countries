import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class ListOfCountries extends Component {
  state = {
    countries: []
  }

  componentDidMount() {
    this.setState({
      countries: this.props.countries
    })
  }

  showCountries = () => {
    const { countries } = this.state
    return countries.map(country => {
      return <Link key={country.name.common} className="list-group-item list-group-item-action" to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>
    })
  }

  render() {
    const listStyle = {
      maxHeight: "90vh",
      overflow: "scroll"
    }
  
    return (
      <div className="col-5" style={listStyle}>
      <div className="list-group">
        {this.showCountries()}
      </div>
    </div>
    )
  }
}

export default ListOfCountries;
