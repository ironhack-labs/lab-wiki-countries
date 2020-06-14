import React from 'react';
import countries from '../countries.json'
import CountryDetail from './CountryDetail.js'
import { Link } from 'react-router-dom';


class LaenderListe extends React.Component {

    state = {
        currentId: "",
    }

    onclickHandler = (event) => {
        this.setState({
            currentId: event.target.getAttribute('id')
          })
    }


    render() {
    return (
      <div className={"App"}>
         <div className={"row"}>
          <div className={"col-5"} style={{"overflow": "scroll"}}>
<ul className={"list-group"}>
{countries.map(c => <li onClick={this.onclickHandler} key={c.ccn3}  className={"list-group-item list-group-item-action"}><Link to={"/countries/" + c.ccn3 } id={c.ccn3}>{c.name.common}</Link></li> )}
</ul></div>
<CountryDetail currentCountry={this.state.currentId}></CountryDetail>
</div>

      </div>
    )
  }
}
export default LaenderListe;