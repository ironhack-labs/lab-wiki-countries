import React from "react";
import data from "./data/countries.json"
import CountryItem from "./CountryItem";
import CountryDetail from "./CountryDetail";
import { Switch, Route } from 'react-router-dom';


export default class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="row">
        <ul className="list-group col-4">
          {data.map((country) => {
            return (<CountryItem key={country.name.common} name={country.name.common} />)
          })}
        </ul>
        <Switch>
          <Route path='/:id' component={CountryDetail} />
        </Switch>
      </div>
    )
  }
}

//render={()=>< CountryDetail/>}