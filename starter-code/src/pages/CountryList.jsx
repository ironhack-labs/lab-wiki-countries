import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CountryList extends Component{
  render(){
      const studentList = {
        width: '30vw',
      };
        return (
          <div style={studentList}>
            <Link to={`/country-detail/${this.props.cca3}`}>{this.props.name}</Link>
          </div>
        )}
  }

export default CountryList;
