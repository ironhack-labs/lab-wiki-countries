import React, { Component } from 'react';
import './Country.css';

export default class Country extends Component {
    render() {
        return (
            <div className="Country">
                <div class="list-group">
                    <a class="list-group-item list-group-item-action">{this.props.flag}{this.props.name.common}</a>
                </div>
            </div>
        );
    }
}
