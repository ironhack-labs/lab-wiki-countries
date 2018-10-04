import React from "react";
import data from "./data/countries.json";


export default class CountryDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {country: ""};
    console.log(this.state.country)
    this.country = data.filter((country)=>(country.name.common === this.state.country));
  }


  render(){
    return(
      <div className="col-4">
        <div>
          {this.props.match.params.id}
        </div>
      </div>
    )
  }
  
}
//{this.setState({country: this.props.match.params.id})}