import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import CountryDetail from "./components/CountryDetail"
import countries from "./countries.json"
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    let countryList = countries.map(v => 
      <ListGroupItem className="justify-content-between"><Link to={`/country/${v.name.official}`}>{v.flag} {v.name.official}</Link></ListGroupItem>
    )
    
    return (
      <Container>
        <nav></nav> 
        <ListGroup>
          {countryList}
        </ListGroup>
        <Switch>
            <Route exact path="/country/:name" component={CountryDetail} />
        </Switch>
      </Container>
    );
  }
}

export default App;
