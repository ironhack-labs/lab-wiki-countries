// import React, {Component} from 'react';
// import {Route, Switch, Link} from 'react-router-dom';
// import CountryDetail from './CountryDetail';
// import axios from 'axios';

// class CountryList extends Component {
//   state = {
//     countries: '',
//     flag: '',
//   };

//   componentDidMount () {
//     axios
//       .get (
//         'https://raw.githubusercontent.com/mledoze/countries/master/countries.json'
//       )
//       .then (result => {
//         console.log (result.data);
//         this.setState ({countries: result.data});
//       })
//       .catch (err => {
//         console.log (err);
//       });
//   }

//   handleClick = () => {};

//   render () {
//     const inlineStyle = {
//       height: '12vh',
//       overflow: 'scroll',
//     };

//     let countries;
//     if (this.state.countries) {
//       countries = this.state.countries.map ((c, index) => {
//         return (
//           <div
//             className="list-group mx-3"
//             key={index}
//             style={inlineStyle}
//             onCLick={this.handleClick}
//           >
//             {c.flg}{c.name.common}
//             <CountryDetail flag={c.flg} common={c.name.common} />
//           </div>
//         );
//       });
//     }

//     return (
//       <React.Fragment>
//         <div className="row col-5">
//           {countries}
//         </div>
//         <div className="details">
//           <CountryDetail />
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default CountryList;
