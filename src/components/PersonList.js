import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class PersonList extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    axios.get(`https://countries.tech-savvy.tech/countries`)
      .then(res => {
        const countries = res.data;
        this.setState({ countries });
      })
  }

  render() {
    return (
        <div>
            <h2>List of countries:</h2>
            <div className="col-5" style={{'maxHeight': '90vh', 'overflow': 'scroll'}}>
            <div className="list-group">
            {this.state.countries.map(country => {
                return (
                    <div key={country.name.common}>
                        <h3 className="list-group-item list-group-item-action">
                            <Link to={`/countries/${country.name.common}`}>
                                {country.name.common}
                            </Link>
                        </h3>
                    </div>
                )
            })}
            </div>
            </div>
        </div>
    )
  }
}