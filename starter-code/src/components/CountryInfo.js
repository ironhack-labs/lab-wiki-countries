import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from "./components/CountryDetail";

const projectDetails = (props) => {
  console.log(props)

  const getProject = (id) => {
    const theProject = oneProject => {
      return oneProject.id === id;
    }
    return projects.find(theProject)
  };
  
  const { params } = props.match;
  const foundProject = getProject(params.id, 10);
   
  return (
    <div>
      <h2>{ foundProject.name.official } <span style={{fontSize:"14px"}}>{ foundProject.name.official }</span></h2>
      <h3>Used technologies: { foundProject.name.official }</h3>
      <p>{ foundProject.name.official }</p>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default projectDetails;