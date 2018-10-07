import React, {Component} from 'react';
import CountryList from './CountryList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: this.props.countries
    };
  }

  sortCountries(a,b) {
      if (a.name.common < b.name.common)
        return -1;
      if (a.name.common > b.name.common)
        return 1;
      return 0;
    }
    
    render() {
      const countries = this.state.countries
      countries.sort(this.sortCountries)
      return (
      <div>
        <h1 class="title">Wiki Countries</h1>
        <CountryList countries={countries}></CountryList>
      </div>
    );
  }
}

export default App;