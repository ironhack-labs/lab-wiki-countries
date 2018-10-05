import React, {Component} from 'react';
import CountryList from './CountryList'
import CountryDetail from './CountryDetail'
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.countries)
    return (
      <div>
        <CountryList countries={this.props.countries}></CountryList>
        {/* <CountryDetail countries={this.props.countries}/> */}
      </div>
    );
  }
}

export default App;