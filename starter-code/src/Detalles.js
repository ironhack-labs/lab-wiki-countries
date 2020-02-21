import React, { Component } from 'react'
import axios from 'axios'

class Detalles extends Component {
    state = {
        name: '',
        capital: '',
        area: '',
        borders: []
    }
    async componentDidMount(props){
        let {contri}= this.props.match.params
        let {data} = await axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
        // this.setState(this.state.name= data.find(el=>el.name.common) )
    }

    render() {
        return (
            <div>
                    <h1>Hoooola</h1>
                        asdasdasdas
                        {console.log("hola")}
                        
            </div>
        )
    }
}

export default Detalles