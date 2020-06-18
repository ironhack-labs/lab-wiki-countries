import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList'
import {Switch, Route} from 'react-router-dom'
import CountryDetail from './components/CountryDetail';

class App extends React.Component {
  state = {

  }
  render(){
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <CountriesList/>
            </div>
            <div className='col-sm'>
              <Switch>
                <Route exact path="/" component={CountriesList} />
                <Route path="/countries/:cca3" component={CountryDetail} />
              </Switch>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default App;
