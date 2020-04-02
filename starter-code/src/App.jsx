import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CountryDetailPage } from './components/country-details-page/country-detail-page';


export const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path={'/'} render={() =>
					<Redirect to={'/country-details'}/>
				}/>
				<Route exact path={'/country-details'} component={CountryDetailPage}/>
				<Route exact path={'/country-details/:cca3'} component={CountryDetailPage}/>
			</Switch>
		</div>
	);
};

