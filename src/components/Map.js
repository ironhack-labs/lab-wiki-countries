import React, { Component } from 'react'

export class Map extends Component {

   
    render() {
        let latlng=this.props.latlng.map(latlng=>(<div>
            <p>{latlng}</p>
        </div>))
        
        return (
            <div>
                {latlng}
            </div>
        )
    }
}

export default Map
