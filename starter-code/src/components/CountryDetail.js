import React from 'react';
// import { myProjects } from './Projects';
import { Link } from 'react-router-dom';
import {CountriesList} from './CountriesDet'
// import {countryList} from './CountriesDet';

const projectDetails = (props) => {
  console.log(props)

  const getProject = (id) => {
    const theProject = oneProject => {
      return oneProject.cca3 === id;
    }
    return CountriesList.find(theProject)
  };
  
  const { params } = props.match;
  const foundProject = getProject(params.id, 10);
   
  return (
    <div>

        <countryList/>
      <h2>{ foundProject.name.common } <span style={{fontSize:"14px"}}>{ foundProject.area }</span></h2>
      <h3> { foundProject.capital }</h3>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default projectDetails;