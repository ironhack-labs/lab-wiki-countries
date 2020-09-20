import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import CountriesList from "./components/CountriesList"

const CountryDetails = () => <h1>HOlo</h1>

function router() {
	return (
		<Router>
			<Switch>
				<Route component={CountriesList} path="/" exact/>
				<Route component={CountryDetails} path="/:name" exact/>
			</Switch>
		</Router>
	)
}

export default router
