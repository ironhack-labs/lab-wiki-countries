import React from 'react';
import { Link } from 'react-router-dom';
import contry from './countries.json'

  export const projects = () => {
    return (
      <div>
        <h2>Paises:</h2>
        {contry.map((eachProject, index) => {
          return (
            <div key={eachProject.cca2}>
              <h3>
                <Link to={`/projects/${eachProject.cca2}`}>{eachProject.cca2}</Link>
              </h3>
              <h4>{eachProject.status}</h4>
              <hr />
            </div>
          )
        })}
    </div>
    )
  }

