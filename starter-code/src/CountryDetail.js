import React, { Component } from 'react';

class CountryDetail extends Component {
    componentDidMount(){ //window.onload happens once when the components first mounts}
        console.log(this.props.match.params.id)
        //find method ... js find 
        /**ENTER CODE HERE */

    }
    render() {
        return (
            <div>
                Country Detail
            </div>
        );
    }
}

export default CountryDetail;
