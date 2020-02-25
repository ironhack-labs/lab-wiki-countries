import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Link } from 'react-router-dom'

class App extends Component {
  state = {
    data : []
  }

  async componentDidMount() {
    let { data } = await axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    this.setState({ data })
  }

  render() {
    let { data } = this.state
    return (
      <>
        <div>
          <h1>Wiki Countries</h1>
          {data.map((element, index) => {
            return <Link to={`/detail/${element.name.common}`} key={index} data={this.state.data}>
            <div>
            {element.flag}
            {element.name.common}
            </div>
            </Link>
          })}
        </div>
      </>
    )
  }
}

export default App;
