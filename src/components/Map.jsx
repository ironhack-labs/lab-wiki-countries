import React from 'react'

export default class Map extends React.Component {


    state = {
        lat: this.props.lat,
        lng: this.props.lng
    }

    shouldComponentUpdate = () => {
        // window.location.reload()
    }

    render() {


        return (
            <div >
                <div onClick={this.Update} id="map" data-lat={this.props.lat} data-lng={this.props.lng} style={{ height: '400px' }}></div>
            </div>
        )
    }
}
