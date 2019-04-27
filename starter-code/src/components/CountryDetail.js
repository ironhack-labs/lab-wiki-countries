import React, { Fragment } from 'react';
import countries from "../countries.json";
import { NavLink } from 'react-router-dom';

const CountryDetail = (props) => {
  console.log(props.match.params.id)

  const getProject = (id) => {
    const theProject = oneProject => {
      return oneProject.id === id;
    }
    return countries.filter(country => {
      return country.cca3 == id
    })[0]
  };

  const { params } = props.match;
  const foundProject = getProject(props.match.params.id);



  return (
<div className="col-8"> 
    <Fragment>

      {
        foundProject === undefined ?

          <h1>Select a Country from the List! </h1>
          :
          <Fragment> <h1>{foundProject.name.common}</h1>

          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Capital</th>
                <td>{foundProject.capital}</td>
              </tr>
              <tr>
                <th scope="row">Area</th>
                <td>{foundProject.area} km2</td>
              </tr>
              <tr>
                <th scope="row">Borders</th>
<td>
{ foundProject.borders.length == 0 ? 
<span>This country has no borders</span>
:
<Fragment> {
  foundProject.borders.map(country => {
    console.log(getProject(country))

    return <li><NavLink to={`/${getProject(country).cca3}`}>{getProject(country).name.common}</NavLink></li>
  })
}
</Fragment>
}
</td>
              </tr>
            </tbody>
          </table>
          </Fragment>
        }

</Fragment>
    </div>          
  
  
    )
  }
  
export default CountryDetail;