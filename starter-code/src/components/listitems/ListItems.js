import React, { Component } from 'react';

class ListItems extends Component {



  render(props) {
    return (
      <div className="each-item">
        <a href="#">{this.props.flag} {this.props.name}</a>
      </div>
    );
  }
}

export default ListItems;