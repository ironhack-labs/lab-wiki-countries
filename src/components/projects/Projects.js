import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ProjectCreateForm from './ProjectCreateForm'

const Projects = () => {

    const initialState = {
        projects: [],
        showForm: false  
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/projects`)
                setState(state => ({
                    ...state,
                    projects: response.data
                }))
            } catch(err) {
                console.log("AXIOS ERROR : ", err);
            }
        }
        fetchProjects()
    }, [])

    const refreshData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/projects")
            setState(state => ({
                ...state,
                projects: response.data
            }))
          } catch(err) {
            console.log("AXIOS ERROR : ", err);
          }
    }

    const handleAddProject = async project => {
        try {
            await axios.post("http://localhost:3001/api/projects", project)
            refreshData()
        } catch(err) {
            console.log("AXIOS ERROR : ", err);
        }
    }

    const handleDeleteProject = async id => {
        try {
            await axios.delete(`http://localhost:3001/api/projects/${id}`)
            refreshData()
        } catch(err) {
            console.log("AXIOS ERROR : ", err);
        }
    }

    const handleToggleForm = (e) => {
        setState(state => ({
            ...state,
            showForm: !state.showForm
        }))
    }

    const listProjects = state.projects.map(project => {
        return (
            <div key={project.title}>
                <Link to={{pathname: `/project/${project._id}`}}>{project.title}</Link>
                <h4>{project.description}</h4>
                <button className="btn btn-danger" onClick={() => handleDeleteProject(project._id)}>Delete</button>
            </div>
        )
    })

    return (
        <div style={{height:"500px"}}>
            <h1>Listado de proyectos</h1>
            <button className="btn btn-light" onClick={handleToggleForm}>
                { !state.showForm ? "Add a new project" : "Close" }
            </button>
            { state.showForm && <ProjectCreateForm addProject={handleAddProject} />}
            {listProjects}
        </div>
    )
}

export default Projects