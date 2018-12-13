import React, {Component} from "react"
import countries from "../../countries.json"

class Countries extends Component {
  state = {
    countries: [],
  }

  componentDidMount = () => {
    this.setState({countries})
  }

  render(){
    const {countries} = this.state

    return(
      <div>
        <h1>COUNTRIES LIST</h1>
      </div>
    )

  }
}

export default Countries