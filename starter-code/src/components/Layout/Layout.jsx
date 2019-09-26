import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import countries from '../../countries.json'

export default class Layout extends Component {
  state = {
    countries
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className='container my-2'>
          <div className='row'>
            <div
              className='col-5'
              style={{
                maxHeight: '85vh',
                overflow: 'scroll'
              }}
            >
              <Sidebar countries={countries} />
            </div>
            <div className='col-7'>{this.props.children}</div>
          </div>
        </div>
      </Fragment>
    )
  }
}
