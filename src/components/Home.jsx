import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = ''
    }

    render() {
        return (
            <div className="col text-center">
                <h1>Home</h1>
                <p>Select one country</p>
            </div>
        )
    }
}
