import { Link, Switch, Route } from 'react-router-dom'

import CountryDetails from './CountryDetails'

const CountriesList = ({ countries }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                    <div className="list-group">
                        {countries.map(elm => <Link className="list-group-item list-group-item-action" to={elm.cca3} key={elm.name.official} >{elm.flag} {elm.name.common}</Link>)}
                    </div>
                </div >

                <Switch>
                    <Route path="/" exact render={() => <div />} />
                    <Route path="/:cca3" render={props => <CountryDetails {...props} countries={countries} />} />
                </Switch>
            </ div>
        </ div>
    )
}

export default CountriesList