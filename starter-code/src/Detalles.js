import React, { Component } from 'react'
import data from './countries.json'
import { Link } from 'react-router-dom'

class Detalles extends Component {

    state = {
        name: '',
        capital: '',
        area: '',
        borders: [],
    }
    async componentDidMount(props){
        let {contri}= this.props.match.params

        let esContri = (place) =>{return place.cca3===contri}
        let conectionName = data.find(esContri)
                this.setState({
            name:conectionName.name.common,
            capital:conectionName.capital,
            area:conectionName.area,
            borders:conectionName.borders
            })



    }
    handleETarget(e){

        console.log(e.target)

    }

    render() {
        return (
            <div style={{
                
            }}>
                    <h1>Country</h1>
                    <p> Name: {this.state.name? this.state.name:"loading..."}</p>
                    <p>Capital is: {this.state.capital? this.state.capital:"loading..."}</p>
                    <p>Area: {this.state.area? this.state.area:"loading..."}</p>
                    <p>Borders:
{this.state.borders? this.state.borders.map(el=>(<li key={el}><Link>{el}</Link></li>)):"loading..."}
                    </p>


            </div>
        )
    }
}

export default Detalles