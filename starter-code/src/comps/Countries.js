import React, {Component} from 'react'

class Countries extends Component {
    constructor(props) {
        super(props)
        
    }
    render() { 

        return ( 
            <div>
                <a>  {this.props.name}</a>
            </div>
         );
    }
}
 
export default Countries;