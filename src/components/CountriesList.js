import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class CountriesList extends Component {
    render() {
        return (            
            <div className= "listOdd">
                {this.props.countries.map(elem => {
                    return (
                      <div className="card-country">
                        <Link to={`/country/${elem.cca3}`}>
                          {elem.name.common}
                        </Link>
                      </div>
                    );
                })}

            </div>
                           

            )
             
       
          }
            
        
    }


export default CountriesList;
