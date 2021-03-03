import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

// class CountriesList extends React.Component {
//   render() {
//     return (
//       <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
//         <div className="list-group">
//         {this.props.listOfCountries.map(eachCountry=> {
//             return (
//           <Link className="list-group-item list-group-item-action" to={`/country/${eachCountry.cca3}`}>
//             {eachCountry.flag} {eachCountry.name.common} 
//           </Link>

//             )

//         })}
//         </div>
//       </div>
//     );
//   }
// }

// export default CountriesList;


class CountriesList extends React.Component {
  state = {
    listOfCountries: []
  }


  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        const listOfCountries = res.data;
        this.setState({ listOfCountries });
      })
  }




  render() {
    return (
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
        {/* {this.props.listOfCountries.map(eachCountry=> {
            return (
          <Link className="list-group-item list-group-item-action" to={`/country/${eachCountry.cca3}`}>
            {eachCountry.flag} {eachCountry.name.common} 
          </Link>

            )

        })} */}
          {this.state.listOfCountries.map(eachCountry=> {
            return (
          <Link className="list-group-item list-group-item-action" to={`/country/${eachCountry.alpha3Code}`} >
            <img src={eachCountry.flag} width='20px' alt=""/> {eachCountry.name} 
          </Link>
            )
        })}





        </div>
      </div>
    );
  }
}

export default CountriesList;
