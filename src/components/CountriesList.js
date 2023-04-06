import { Link } from 'react-router-dom';
import{useState} from 'react';

function CountriesList(props) {
    console.log(props)
    const {countriesArr} = props;
  return (
    <div className="container d-flex justify-content-between">
            <div className="row">
                <div className="col-5" style={{ maxHeight: 90 + 'vh', overflow: "scroll" }}>
                    <div className="list-group">
    
                  {props.countriesArr.map((country) => {
                   return (
                   <Link to={'/' + country.alpha3Code}>{country.name.common}</Link>
        );
      })}
             </div>
                </div>

            </div>
            
        </div>
    );
  
};

export default CountriesList;
