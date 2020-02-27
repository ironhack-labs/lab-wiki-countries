import React from "react";
import { Link} from "react-router-dom";

class Borders extends React.Component{
    render(){
        return(
          <div>
         <Link className="list-group-item list-group-item-action" to={this.props.border}>{this.props.border}</Link>
      </div>
         
        )
    }
}

export default Borders