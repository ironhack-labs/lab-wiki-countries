import React, {Component} from "react"
import countries from "../../countries.json"
import Country from "./Country.js";

class Countries extends Component {
  state = {
    countries: [],
  }

  componentDidMount = () => {
    this.setState({countries})
  }

  drawCountry = () => {
    const {countries} = this.state
    return countries.map((country, index) => {
      return <Country key={index} {...country}/>
    })
  }

  render(){
    const {drawCountry} = this

    return(
      <section>
         <h1>COUNTRIES LIST</h1>
        <section style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          }}>
          
          {drawCountry()}
        
        </section>
      </section>
      
    )

  }
}

export default Countries