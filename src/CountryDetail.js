import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export class CountryDetail extends React.Component {




 /*    getProject = id => {
        const theProject = oneProject => {
          return oneProject.id === id;
        };
        return myProjects.find(theProject);
      }; */

  render() {


/*     const { params } = props.match;
    const foundProject = getProject(params.id, 10); */

    const { name, cca3, capital, area, borders } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <table>
          <tr>
            <td>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{area} km2</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {/*  {borders.map(country=>{
                return (<li>country</li>)
            })} */}
              </ul>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
