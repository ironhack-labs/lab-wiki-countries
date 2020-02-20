import data from '../countries.json'

import React, { Component } from 'react'
import List from '../../components/List.js'
import Nav from '../../components/Nav.js'
import Detail from '../../components/Detail.js'

export default class CountriesDetail extends Component {
    state={
        countries:[...data]
    }
    render() {
        return (
            <>
                <Nav />
                <div class="container">
                    <div class="row">
                        <div class="col-5">
                            <List data={this.state.countries}/>
                        </div>
                        <Detail />
                    </div>
                </div>
            </>
        )
    }
}


      