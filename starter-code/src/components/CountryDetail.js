import React, { Fragment } from 'react';
import countries from "../countries.json";

const CountryDetail = (props) => {
  console.log(props)

  const getProject = (id) => {
    const theProject = oneProject => {
      return oneProject.id === id;
    }
    return countries.find(theProject)
  };

  const { params } = props.match;
  const foundProject = getProject(params.id, 10);


  return (

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
                <td>{foundProject.area}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          </Fragment>
        }

</Fragment>
              
  
  
    )
  }
  
export default CountryDetail;