import React, { Component } from 'react';

class Contact extends Component {
    componentDidMount(){ //window.onload happens once when the components first mounts 
        console.log(this)
    }
    render() {
        return (
            <div>
                Contact Page
            </div>
        );
    }
}

export default Contact;
