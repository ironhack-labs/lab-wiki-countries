import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import './App.css';

class App extends React.Component{
  state = {
    data: []
  }

  async componentDidMount(){
    let {data} = await axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    this.setState({data})
    console.log(data)
  }

  render(){
    let {data} = this.state
    return (
      <div style={{width: '30%'}}>
        <div>Wikicountries</div>
      {data.map((el, index) => {
        return (<Link to={`/detail/${el.name.common}`} key={index} data={this.state.data}><div>{el.flag} {el.name.common}</div></Link>)
      })}
      </div>
    )
  }
}

export default App;
