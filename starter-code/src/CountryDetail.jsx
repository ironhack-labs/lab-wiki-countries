import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CountryDetail extends Component {
  render () {
    console.log (this.props.match.params.id);
    console.log (this.props.location.state.c);

    return (
      <React.Fragment>
        {/* could use some refactoring */}
        <h1>{this.props.location.state.c.name.common}</h1>;
        <h2>Capital: {this.props.location.state.c.capital}</h2>
        <h2> Area: {this.props.location.state.c.area} km2</h2>
        <h2>Borders: </h2>
        <ul>
          {this.props.location.state.c.borders.map (i => (
            <li key={i}>
              <Link>{i}</Link>
              {/* <Link to={{pathname: `/country/${i}`}}>{i}</Link> */}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default CountryDetail;
