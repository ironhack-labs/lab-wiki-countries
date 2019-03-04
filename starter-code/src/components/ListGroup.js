import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import countries from '../data/countries.json';
import ListElement from './ListElement';

class ListGroup extends Component {

  render () {
    return (
      <div className="list-group">
        {countries.map( (el, i ) => {
          return (
            <ListElement key={i} {...el} />
          );
        })
        }
      </div>
    )
  }
}

export default ListGroup;