// import React, { Component } from 'react';
// import './App.css';
// import CountryDetail from "./Components/CountryDetail.jsx"
// import countries  from "./countries.json"
// import { Link, Switch, Route } from 'react-router-dom';

// class App extends Component {

//   state = {
//     allCountries:countries,
//     countries:countries,
//     // currentPath : ""
//   }

//   getCountries = () => {
//     let allCountries = [...countries];
//     let arr = []
//     for (let i=0;i<allCountries.length;i++){
//         arr.push(<Link to={`/${allCountries[i].cca3}`} className="list-group-item list-group-item-action">{allCountries[i].name.common}</Link>)
//       }
//     console.log(arr)
//     return arr
    
//   } // Writes down all the countries in the proper format
//   // Adds the Link to the cca2 of each country
  
//   // getPath = (path) => {
//   //   let copyState  = {...this.state}
//   //   copyState.currentPath = path
//   //   this.setState(copyState)

//   //   console.log("Changed currentPath")

//   // } // Sets the state property currentPath to the country that gets clicked
  
  
//   render() {
  
//     return (
//     <div className="App">


//         <div>
//           <a href="#" className="list-group-item list-group-item-action active">WikiCountries</a>

//           <div className="list-group col-5">
//             {this.getCountries()}
//           </div>


//           <div className="list-group col-7">
          
//             <Switch>
//               <Route
//                 path="/:id"
//                 // render={props => <CountryDetail {...this.props} countries={this.state.countries}/>}
//                 children={<CountryDetail />}
//               />
//             </Switch>

//           </div>



//         </div>

//     </div>


//   );
// }
// }

// export default App;


      