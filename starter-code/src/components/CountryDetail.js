import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom';
import NothingSelect from "./NothingSelect.js";
import Info from "./Info.js";
class CountryDetail extends Component {
    render() {
      return (
        <div >
             <Switch>
          <Route exact path='/' component={NothingSelect}/>
       <Route  path='/:id' component={Info}/> 
         
        </Switch>
     
        </div>
      );
    }
  }
  
  export default CountryDetail;




