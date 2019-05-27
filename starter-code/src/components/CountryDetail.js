import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class CountryDetail extends Component {



  render() {

    return (
      <Fragment>
        <div class="row">
            <div class="col-5">Column 5/12</div>
            <div class="col-7">Column 7/12</div>
        </div>

        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active">Cras justo odio (active)</a>
            <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
            <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
        </div>
      </Fragment>
    );
  }
}

export default CountryDetail;