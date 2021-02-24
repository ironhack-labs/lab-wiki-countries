
import countries from '../countries.json'
import { Component } from 'react'
import Countrie from './Countrie'



class CountriesList extends Component {

    constructor() {
        super()
            this.state = {
                list: countries
            }
    }

    render() {
        return ( 
            <>

            {this.state.list.map(elm => <Countrie {...elm} />)}


           </>
        )
    }

}




export default CountriesList