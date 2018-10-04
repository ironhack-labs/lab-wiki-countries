import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import countries from './countries.json'
import Nav from './Nav';
import Routes from '../Routes';

class App extends Component {

  state={
    countries
  }

  // allCountries = () => {
  //   const paises = []
  //   for(let i=0; i<countries.length; i++){
  //     paises.push(<NavLink key={i} to={`/detail/${countries[i].cca3}`}><li>{countries[i].name.common}</li></NavLink>)
  //   }
    
  //   return paises
  // }


  render() {
    return (
      <div>
       <h1>Wiki Countries</h1>
       <section>
         <Nav info={this.state.countries} />
       </section>
       <br/>
       <section>
         <Routes />
       </section>
      </div>
    );
  }
}

export default withRouter(App);
