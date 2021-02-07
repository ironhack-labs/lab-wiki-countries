import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import {Route, Switch} from 'react-router-dom';


function App() {
	return (
		<div className="App">
			<Navbar/>
			<div className="container">
				<div className="row">
					<CountriesList countries={countries}/>
					<Switch>
						<Route path="/:countryCode" render={props => {
							return <CountryDetails {...props} countries={countries}/>;
						}}/>
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default App;
