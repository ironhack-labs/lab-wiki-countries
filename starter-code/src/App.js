import React, { Component } from 'react';
import './App.css';
import CountryList from './components/CountryList/CountryList';
import countries from './countries.json';

class App extends Component {
	state = {
		countries
	};

	render() {
		console.log(this.state);
		const { countries } = this.state;
		return <CountryList countries={countries} />;
	}
}

export default App;
