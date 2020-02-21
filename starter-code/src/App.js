import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class App extends Component {

  state={
    Contris:[]
  }
 async  componentDidMount(){
    const {data} = await axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    this.setState(this.state.Contris = data)
    console.log(this.state.Contris);
  }

  render() {
    return (
      <div>

      {this.state.Contris.map(el=>(

        <p key={el.name.common}>{el.name.common}</p>
      //  <img src={`https://www.countryflags.io/${(el.flag).toLowerCase()}/flat/64.png`}/>

      ))}
      </div>
    )
  }
}


export default App
