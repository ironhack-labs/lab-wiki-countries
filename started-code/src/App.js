import React from 'react';
import countries from './countries.json'
import {CountryDetail} from './CountryDetail.js'
import 'bootstrap/dist/css/bootstrap.css';


export class App extends React.Component 
{
    constructor(){
        super();
        this.state = {
            countries,
            selectedCountry:null
        }

     
    }




    
    render() {
      return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <ul>
                    {this.state.countries.map((e, i) => {
                        return(
                            <CountryDetail 
                                onSelect={this.selectCountry}
                                key={i}
                                name={e.name.common}
                                cca3={e.cca3}
                            />
                        )
                    })}
                </ul>
                </div>
                <div className="col-md-6">
                </div>
            </div>
        </div>
      )
    }




    
}
export default App;
