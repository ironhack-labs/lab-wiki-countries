import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom';
import axios from 'axios'
import ProjectCreateForm from './ProjectCreateForm'

// Class component => Functional component transition test
// Everything works fine except useHistory Hook
const ProjectDetail = props => {
    
    const initialState = {
        project: "",
        showForm: false     
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/projects/${props.match.params.id}`)
                setState(state => ({
                    ...state,
                    project: response.data
                }))
            } catch(err) {
                console.log("AXIOS ERROR : ", err);
            }
        }
        fetchProject()
    }, [])

    const refreshProject = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/projects/${props.match.params.id}`)
            setState(state => ({
                ...state,
                project: response.data
            }))
        } catch(err) {
            console.log("AXIOS ERROR : ", err);
        }
    }

    const handleUpdateProject = async project => {
        try {
            await axios.put(`http://localhost:3001/api/projects/${props.match.params.id}`, project)
            handleToggleForm()
            refreshProject()
        } catch(err) {
            console.log("AXIOS ERROR : ", err);
        }
    }

    const handleDeleteProject = async id => {
        // const { push } = useHistory()
        try {
            await axios.delete(`http://localhost:3001/api/projects/${props.match.params.id}`)
            props.history.push('/')
            // push('/')
        } catch(err) {
            console.log("AXIOS ERROR : ", err);
        }
    }

    const handleToggleForm = e => {
        setState(state => ({
            ...state,
            showForm: !state.showForm
        }))
    }

    return (
        <div>
            <button className="btn btn-light" onClick={handleToggleForm}>
                { !state.showForm ? "Edit project" : "Close" }
            </button>
            { state.showForm && <ProjectCreateForm addProject={handleUpdateProject} />}
            <div>
                <h2>{state.project.title}</h2>
                <p>{state.project.description}</p>
            </div>
            <button className="btn btn-danger" onClick={() => handleDeleteProject(props.match.params.id)}>Delete</button>
        </div>
    )
}

export default ProjectDetail