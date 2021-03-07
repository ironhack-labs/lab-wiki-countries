import React from 'react';
import { Route, Link } from 'react-router-dom';
//import countries from '../countries.json';
// use{...} for

import axios from 'axios';



class CountryDetails extends React.Component {
  state = {
    country: [],
  };

//   state = {
//     country: {},
//   };

//   componentWillReceiveProps(props) {
//     let cca3 = props.match.params.cca3;
// console.log('cca3: ', props.match.params)
//     let country = countries.find((eachCountry) => eachCountry.cca3 === cca3);

//     this.setState({
//       country,
//     });
//   }

componentWillReceiveProps() {

   console.log(this.props.match.params.alpha3Code)
    axios.get(`https://restcountries.eu/rest/v2/alpha/${this.props.match.params.alpha3Code}`)
      .then(res => {
        console.log(res.data)
        const country = res.data;

        this.setState({ country });
       })
  
  }

// FIX THIS NOT RIGHT USE ENDPOINT SEE ABOVE
  // componentWillReceiveProps(props) {
  //   //console.log(props.match.params)
  //   axios.get(`https://restcountries.eu/rest/v2/all`)
  //     .then(res => {
  //       let countryData = res.data
  //       let country = countryData.find((eachCountry) => eachCountry.alpha3Code === props.match.params.alpha3Code)

  //      this.setState({ country });
  //     })
  // }

  // componentDidMount() {
  //   axios.get(`https://restcountries.eu/rest/v2/all`)
  //     .then(res => {
  //       const countries = res.data;
  //       this.setState({ countries });
  //     })
  // }




  render() {
    return (
    
      <div className="col-7">
        <h1>{this.state.country.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30% ' }}>Capital</td>
              <td>{this.state.country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.state.country.area}km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
            {/* originnal from lesson without api */}
            {/* <td>Borders</td>
              <td>
                <ul>
                  {this.state.country.borders?.map((eachBorder) => {
                    let countryName = countries.find(
                      (eachCountry) => eachBorder === eachCountry.cca3
                    );

                    console.log('cname: ', countryName);

                    return (
                      <li key={eachBorder}>
                        <Link to={`/country/${eachBorder}`}>
                          {countryName.name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td> */}
              {/* other try self with api axios too much way*/}
              <td>Borders</td>
              {/* <td>
                <ul>
                {this.state.country.borders?.map((eachBorder) => {
                    let countryName = this.state.countries.find(
                      (eachCountry) => eachBorder.includes(eachCountry.alpha3Code)
                    );

                    //console.log('cname: ', countryName);

                    return (
                      <li key={eachBorder}>
                        <Link to={`/country/${eachBorder}`}>
                          {countryName.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
