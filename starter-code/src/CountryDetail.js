import React from 'react';
import { Link } from 'react-router-dom';
import contry from './countries.json'

  export const projects = () => {
    return (
      <div>
        <h2>Paises:</h2>
        {contry.map((eachProject, index) => {
          return (
            <div key={index}>
              <h3>
                <Link to={`/projects/${eachProject.name.official}`}>{eachProject.name.official}</Link>
              </h3>
            </div>
          )
        })}
    </div>
    )
  }

