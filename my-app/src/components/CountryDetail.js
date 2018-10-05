import React, {Component} from 'react';

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props)
  }

  render() {
    const country = this.props.country
    return (
      <div class="list-group col-8 border">
        <h2>{country.name.common}</h2>
        <h4><strong>Capital:</strong> {country.capital}</h4>
        <ul>
         { country.borders.map((e, i) => {
            return (
              <li>{e}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default CountryDetail;