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
  }
  render() {
    return (

      <>
      <div style={{
        height:'100vh',
        width:'15vw',
        overflowY:'scroll',
        marginBottom:'1%',
        paddingLeft:'2%',
        borderBottom:'black 1px'
      }}>

      {this.state.Contris.map(el=>(
        <Link to={`/Detalles/${el.cca3}`} key={el.name.common}>
        <p>{el.name.common}</p>
        </Link>
      //  <img src={`https://www.countryflags.io/${(el.flag).toLowerCase()}/flat/64.png`}/>
      // {}Estoy en windows y no me da las banderas porque al parecer no me cambia la flag a minúsculas, pero
      //investigué y es algo que tiene que ver  con una relga iso de los paises y no supe como manejar
      //esa parte pues solo encontré que debía instalar una librería o plugin para hacer ese cambio,}
      //pero aun así me regresaba, con el cambio o modificacion del CODE ISO Countries Type AW, solo me regresa
      //el bombre del país y yo solo quería que fuera minúsculas
      ))}
      </div>
      </>
    )
  }
}


export default App
