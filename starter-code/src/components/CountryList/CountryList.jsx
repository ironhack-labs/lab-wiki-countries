import React, { Component } from "react";
import "./CountryDetail.css";
import { Link } from "react-router-dom";
import countries from "./../../countries.json";

class CountryList extends Component {
  render() {
    return (
      <div>
        {countries.map(country => {
          return (
            <h1>
              {" "}
              {/* This is going through the data array,and for each object is using
               the cca3 as an id and linking to the route with path ":id" */}
              <Link to={`/${country.cca3}`}>{country.name.official}</Link>
            </h1>
          );
        })}
      </div>
    );
  }
}

export default CountryList;

// class ProductView extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       information: null
//     };

//   }

//   componentDidMount(){
//     this.fetchData();

//   }

//   componentDidUpdate(previousProps, previousState) {
//     const currentProductName = this.props.match.params.name;
//     const previousProductName = previousProps.match.params.name;
//     if (currentProductName !== previousProductName) {
//       this.fetchData();
//     }
//   }

//   fetchData() {
//     const productName = this.props.match.params.name;

//     loadProduct(productName)
//       .then(information => {
//         this.setState({
//           information: information
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     const productName = this.props.match.params.name;
//     const information = this.state.information;
//     return (
//       <div>
//         <p>You're at the product {productName} view!</p>
//         {information && (
//           <div>
//             <strong>{information.title}</strong>
//             <small>{information.price}</small>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default ProductView;
