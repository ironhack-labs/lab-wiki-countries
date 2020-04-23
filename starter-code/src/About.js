import React, { Component } from 'react';
 

class About extends Component {
    componentDidMount(){ //window.onload happens once when the components first mounts 
        console.log(this)
    }



    render() {
        return (
            <div>
                About page
            </div>
        );
    }
}

export default About;
