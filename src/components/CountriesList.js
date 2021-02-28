// Iteration 1.3. 
import React from 'react'
import { Link } from 'react-router-dom';

function CountriesList(props) {
    const { countriesData } = props;
  
    return (
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          
          {countriesData.map(( { cca3, name, flag } ) => { /* per each country, in the arguments instead of passing a country, it destructurs the country, only passing the cca3 property of the country object */
            return (
              
              <Link key={cca3} className="list-group-item list-group-item-action" to={`/${cca3}`}>
                {/* to={`/${alpha3Code}`} */}
              
                {flag}{' '}{/* space between flag and name */}
                {name.common}
                {/* {name} */}
              </Link>
            );
          })}

        </div>
      </div>
    );
  }
  
  export default CountriesList;

// <a class="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a> line 15: instead of a Link, and instead of href to

// Iteration 1.4. 
// class CountriesList extends Component {
//     state = {
//         countries: countries
//       }

//     render() {
//         console.log('lalala', this.props)
//         const { countries } = this.state;
//         console.log(countries);
//         const countries = this.props.countries;
//         console.log(countries)
//         return (
//             <div>
//             {countries.map((country) => {
//                 return (
//                     <Link to={`/countries/${country.cca3}`}><h3>{country.name.common}</h3></Link>
//                 )
//             })}
//             </div>
//         )
//     }
// }

// export default CountriesList;

// import { Link } from 'react-router-dom';
// import React from 'react'

// function CountriesList(props) {
//     console.log('lalala', props)
//     const countries = props.countries;
//     return (
//         <div>
//             {countries.map((country) => {
//                 return (
//                     <Link to={`/countries/${country.cca3}`}><h3>{country.name.common}</h3></Link>
//                 )
//             })}
//         </div>
//     )
// }

// export default CountriesList;