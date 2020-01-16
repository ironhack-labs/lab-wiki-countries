import React, { Component } from 'react';
import Data from '../countries.json'

class Detail extends Component{
    state={
        country: Data.find(c => c.id === this.props.match.cca3)
    }

    componentDidMount(){
        const countryDetail = Data.find(c => c.id === this.props.match.cca3)
        this.setState({country: countryDetail})
    }



    render(){
        console.log(this.props, this.state)

        return ( 
            <div className="col-7">
                <h1>{this.state.country.name.common}</h1>
            </div>
         );
    }
    
}
 
export default Detail;