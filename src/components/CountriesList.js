// Iteration 1.3. 
import React from 'react'
import { Link } from 'react-router-dom';

function CountriesList(props) {
    const { countriesData } = props;
  
    // Iteration 4
    return (
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          
        {countriesData.map(( { alpha3Code, name} ) => { 
            return (
              <Link key={alpha3Code} className="list-group-item list-group-item-action" to={`/${alpha3Code}`}>{name}</Link>
            );
          })}

        </div>
      </div>
    );

    // Iteration 1, Iteration 2 & Iteration 3
    // return (
    //   <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
    //     <div className="list-group">
          
    //     {countriesData.map(( { cca3, name, flag } ) => { /* per each country, in the arguments instead of passing a country, it destructurs the country, only passing the cca3 property of the country object */
    //         return (
              
    //           <Link key={cca3} className="list-group-item list-group-item-action" to={`/${cca3}`}>
              
    //             {flag}{' '}{/* space between flag and name */}
    //             {name.common}
    //           </Link>
    //         );
    //       })}

    //     </div>
    //   </div>
    // );

  }
  
  export default CountriesList;