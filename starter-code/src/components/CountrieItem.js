import React, { Component } from 'react'

export default class CountrieItem extends Component {
    render() {
        return (
            <div>
                <a className="list-group-item list-group-item-action" href={this.props.cca3} onClick={this.props.showDetails}> {this.props.flag}{this.props.name.common}</a>
            </div>
        )
    }
}
