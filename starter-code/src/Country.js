import React from "react";
import { Link } from 'react-router-dom';
import Details from './Details';



class Country extends React.Component {
  constructor(props){
    super();

    this.state = {
      countries: props.countries
    }
  }
  render() {
    return (
<div className="list-group">
  <ul>
    {this.props.countries.map((country, idx) => {
      return (
        <li className="list-group-item list-group-item-action" key={idx}>
          <Link to={country.cca3}>{country.name.common}</Link>
        </li>
      )
    })}
  </ul>

</div>
    );
  }
}

export default Country;