import React, { Component } from 'react';
import './App.css';
import { CountriesList } from './components/CountriesList';
import Navbar from './components/Navbar';
import ListCountries from './countries.json'
import Routes from './Routes';

class App extends Component {

	state={
		listC: [],
	}

	componentDidMount() {
		this.setState({listC: ListCountries});
	}

	render() {
		const {listC} = this.state;
		return (
			<div className="App">
				<Navbar />
				<div className="row-app">
					<CountriesList data={listC} />
					<Routes />
				</div>
			</div>
		)
	}

}

export default App;
