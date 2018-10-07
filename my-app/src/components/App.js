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
        <h1 class="title">Wiki Countries</h1>
        <CountryList countries={this.props.countries}></CountryList>
      </div>
    );
  }
}

export default App;