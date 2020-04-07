import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Country extends Component{

  render(){
        return (
          <div style={{width: '40vw'}}>
            <Link to={`/country-detail/${this.props.cca3}`}>{this.props.name}</Link>
          </div>
        )}
  }

export default Country;