import React, { Component } from "react";
// import { Link } from "react-router-dom";

// const id = this.props.match.params.cca3;

class DetailsRedo extends Component {
  state = {
    country: {}
    //     loading: true
  };

  findCountry = () => {
      let found = this.props.getCountry(this.props.match.params.cca3);
      this.setState({
        country: found
      })
  }

  // componentDidMount(){
  //     this.doIt()
  // }

  // UNSAFE_componentWillReceiveProps = () => {
  //     this.doIt()
  // }

  // doIt = () => {
  //     console.log(this.props.match);
  // componentDidMount = () => {
  //     console.log("hello", this.props);
  //     const getCountry = cca3 => {
  //         const theCountry = oneCountry => {
  //           return oneCountry.cca3 === cca3;
  //         };
  //         return this.props.countries.find(theCountry);
  //       };

  //       const { params } = this.props.match;
  //       const foundCountry = this.props.getCountry(params.cca3);

  //       console.log(foundCountry, this.props.countries, params);
  //       this.setState({
  //           country: foundCountry,
  //           loading: false
  //       })
  // }

  // componentDidUpdate = () => {
  //     console.log("goodbye");
  // }

  // findCountry = () =>{
  //     let {params} = this.props.match;
  //     let foundCountry = this.props.getCountry(params.cca3);
  //     console.log(foundCountry);
  //     return(
  //         <div>{foundCountry.name}</div>
  //     )
  // }

//   getCountry = country => {
//       return country.cca3 === this.props.match.params.cca3;
//   }


  render() {
    // if(this.state.loading){
    //     console.log('loading')
    //     return(<div className="col-7 text-justify">....loading.....</div>)
    // }
    console.log(this.props, this.props.match.params.cca3, this.state);
    return (
      <div className="col-7 text-justify">
        can i see this
        {/* <div>{this.findCountry}</div> */}
        {/* <h1>{this.state.country.name.common}</h1>
              <h6><em>{this.state.country.name.official}</em></h6>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td className="capital">Capital</td>
                    <td>{this.state.country.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {this.state.country.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>{borders}</ul>
                    </td>
                  </tr>
                </tbody>
              </table> */}
      </div>
    );
  }
}

export default DetailsRedo;
