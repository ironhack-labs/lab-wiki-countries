import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from '../countries.json'


class Dashboard extends Component {
  render() {
    return (

      <div className="col-5" style={{height: "90vh", overflow: "scroll"}} >
            <div className="list-group">

              {countries.sort((a,b) => a.name.commom-b.name.commom).map(e =>
                <Link className="list-group-item list-group-item-action" to={'/'+e.cca3}>{e.flag} {e.name.common} ({e.cca3})</Link>
                )}

            </div>
          </div>
    );
  }
}

export default Dashboard;