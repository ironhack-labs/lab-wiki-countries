import React, { Component } from 'react';
import axios from 'axios';

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: {},
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://restcountries.eu/rest/v2/alpha/' + this.props.match.params.id
      )
      .then((response) => {
        this.setState({ country: response.data });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      axios
        .get(
          'https://restcountries.eu/rest/v2/alpha/' + this.props.match.params.id
        )
        .then((response) => {
          this.setState({ country: response.data });
        });
    }
  }

  render() {
    return (
      <div className="p-2">
        <h1>Detail</h1>
        <h2 key={this.state.country.name}>{this.state.country.name}</h2>
        <div></div>
      </div>
    );
  }
}

export default CountryDetail;
