import React from "react";
import { Link} from "react-router-dom";

class Countrys extends React.Component{
    render(){
        return(
          <div>
         <Link className="list-group-item list-group-item-action" to={this.props.cca3}>{this.props.flag}{this.props.name.common}</Link>
      </div>
         
        )
    }
}

export default Countrys

