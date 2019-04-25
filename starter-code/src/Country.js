import React from "react";
import {Link} from 'react-router-dom';
const Country = (props) => {
  const {flag, name, href } = props;
    return (
      <Link to={href} className="list-group-item list-group-item-action" >{flag} {name}</Link>
    );
  
}

export default Country;
