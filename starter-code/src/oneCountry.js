import React from "react";

class oneCountry extends React.Component {
  render() {
    return (
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">{this.props.name.common}</a>
</div>
    );
  }
}

export default oneCountry;