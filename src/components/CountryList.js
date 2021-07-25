import React from 'react';
import './CountryList.css';
//import CountryDetails from './CountryDetails.js';
import {Link} from 'react-router-dom';



class CountryList extends React.Component {
  
  state = {
    list: this.props.countryArr
  }
  
  render() {
    return (
      <div className="display">
        <ul id="margin" className="list-group w-25 p-3">
          {this.state.list.map((el, i)=><><li key={i} className="list-group-item">
          <Link to={`/${el.cca3}`}>{el.flag} {el.name.common}</Link></li></>)}
        </ul>

      </div>
    )
  }
}

export default CountryList;