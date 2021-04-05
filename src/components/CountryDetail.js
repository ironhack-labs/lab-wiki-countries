import React from 'react';
// import countries from '../countries.json';
import { getCountries } from '../services/BaseService';
import { Link } from 'react-router-dom'


// class CountryDetail extends React.Component {

//     state = { countries: this.props.countries }

//     componentDidMount() {
//       getCountries()
//         .then(allCountries => {
//           this.setState({countries: allCountries})
//         })
//         .catch(err => console.log(err))
      
//       console.log('componentDidMount')
//     }
      
//     fetchCountry = () => {
//      getCountries()
//         .then(allCountries => {
//             this.setState({countries: allCountries})
//         })
//         .catch(err => console.log(err))
//         console.log('this.state.countries', this.state.countries)
        
//       }
      
//       render() {
//         // if (this.state.countries.length > 0) {
//           const getCountry = (id) => this.state.countries.find(country => country.cca3 === id);
//           const { params } = this.props.match;
//           const foundCountry = getCountry(params.id);
//           console.log('this.props.match.params', this.props.match.params.id)
//           console.log('this.state.countries', this.state.countries)
//         //} 

//         return(
//         <div className="col-6 ml-3">
//           <h1>{ foundCountry.name } <span className="ml-2">{ foundCountry.flag }</span></h1>
//           <table className="table">
//             <thead></thead>
//             <tbody>
//               <tr>
//                 <td style={{width: '30%'}}>Capital</td>
//                 { foundCountry.capital.map((capital, idx) => <td key={foundCountry.cca3}>{capital}</td>)}
//               </tr>
//               <tr>
//                 <td>Area</td>
//                 <td>
//                   { foundCountry.area } km
//                   <sup>2</sup>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Borders</td>
//                 <td>
//                   <ul className='text-left'>
//                       {
//                         foundCountry.borders.length > 0
//                         ?
//                           foundCountry.borders.map(bordingCountry => <li key={bordingCountry.cca3}><Link style={{listStyle: 'none'}} to={`/countries/${bordingCountry}`}>{bordingCountry}</Link></li>)
//                         :
//                         'This country has no Borders'
//                       }
//                   </ul>
//                 </td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td>
//                   <Link to='/'>Hide</Link>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )
//     }
// }


const CountryDetail = (props) => {
  console.log('Country')

  const getCountry = (id) => props.countries.find(country => {
    return country.alpha3Code === id;
  });
  const { params } = props.match;
  const foundCountry = getCountry(params.id);

  if (!foundCountry) return <p>Loading</p>

  return(
    <div className="col-6 ml-3">
      <h1>{ foundCountry.name } <span className="ml-2"><img src={foundCountry.flag} height='15rem' className="mr-1" alt={`${foundCountry.name}-flag`}/></span></h1>
      <table className="table">
        <tbody>
          <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{ foundCountry.capital }</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              { foundCountry.area } km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul className='text-left'>
                  {
                    foundCountry.borders.length > 0
                    ?
                      foundCountry.borders.map(bordingCountry => <li key={bordingCountry.cca3}><Link style={{listStyle: 'none'}} to={`/countries/${bordingCountry}`}>{bordingCountry}</Link></li>)
                    :
                    'This country has no borders'
                  }
              </ul>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link to='/'>Hide</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}

export default CountryDetail;