import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
            let {data} =await axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
        let esContri = (place) =>{return place.cca3===contri}
        let conectionName = data.find(esContri)
                this.setState({
            name:conectionName.name.common,
            capital:conectionName.capital,
            area:conectionName.area,
            borders:conectionName.borders
            })



    }


    render() {
        return (
            <div style={{
                    position:'absolute',
                    backgroundColor: '#f5fffd',
                    top:'5%',
                    left:'30%',
                    width:'40vw',
                    display:'inline-block',
                    padding:'3%',
                    boxShadow:'0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02)'

                }}>
                    <h1>Country</h1>
                    <p style={{
                        fontWeight:'bold'

                    }}> Name: {this.state.name? this.state.name:"loading..."}</p>
                    <p style={{
                        fontWeight:'bold'

                    }}>Capital is: {this.state.capital? this.state.capital:"loading..."}</p>
                    <p style={{
                        fontWeight:'bold'

                    }}>Area: {this.state.area? this.state.area:"loading..."}</p>
                    <p style={{
                        fontWeight:'bold'

                    }}>Borders:
{this.state.borders? this.state.borders.map(el=>(<li key={el}
    style ={{
        listStyleType:'none',
        margin:'3%'
    }}
    ><Link>
    {el}
    </Link></li>)):"loading..."}
                    </p>


            </div>
        )
    }
}

export default Detalles