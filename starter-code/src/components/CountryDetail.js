import React from "react";
import { Link } from "react-router-dom";
import contry from "./countries.json";

export const projects = () => {
  return (
    <div className='sideBar-margin'>
      {contry.map((eachProject, index) => {
        return (
          <div key={index} className='view overlay'>
            <h5 className="col-md-3 card-country">
              <Link to={`/projects/${eachProject.name.official}`}>
                {eachProject.flag} - {eachProject.name.official}
              </Link>
            </h5>
          </div>
        );
      })}
    </div>
  );
};