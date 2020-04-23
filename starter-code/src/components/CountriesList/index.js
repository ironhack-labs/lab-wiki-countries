import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CountriesList extends Component {
    render() {
        return(
            <div className="uk-flex uk-flex-wrap-stretch uk-width-1-1" uk-height-viewport="expand: true">
                <div className="uk-section uk-width-1-4">
                    <ul className="uk-list uk-list-divider uk-list-large">
                        <li>List item 1</li>
                        <li>List item 2</li>
                        <li>List item 3</li>
                        <li>List item 4</li>
                        <li>List item 5</li>
                        <li>List item 6</li>
                        <li>List item 7</li>
                    </ul>
                </div>

                <div className="uk-section uk-width-3-4 colored">
                    <div className="uk-container uk-container-small uk-padding-large">
                        <h1>France</h1>
                        
                        <table className="uk-margin-large-top">
                            <tbody>
                                <tr>
                                    <th>Capital</th>
                                    <td>Paris</td>
                                </tr>

                                <tr>
                                    <th>Area</th>
                                    <td>55,169</td>
                                </tr>

                                <tr>
                                    <th>Borders</th>
                                    <td>
                                        <ul>
                                            <li><Link to="">Spain</Link></li>
                                            <li><Link to="">Germany</Link></li>
                                            <li><Link to="">Belgium</Link></li>
                                            <li><Link to="">Monaco</Link></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

export default CountriesList