import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ProjectCreateForm from './ProjectCreateForm'

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            showForm: false
        }
    }

    refreshData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/projects")
            this.setState(state => ({
                ...state,
                projects: response.data
            }))
          } catch(err) {
            console.log("AXIOS ERROR : ", err);
          }
    }

    componentDidMount() {
        this.refreshData()
    }

    handleAddProject = async project => {
        try {
            await axios.post("http://localhost:3001/api/projects", project)
            this.refreshData()
        } catch(err) {
            console.log("AXIOS ERROR : ", err);
        }
    }

    handleDeleteProject = async id => {
        try {
            await axios.delete(`http://localhost:3001/api/projects/${id}`)
            this.refreshData()
        } catch(err) {
            console.log("AXIOS ERROR : ", err);
        }
    }

    handleToggleForm = (e) => {
        this.setState(state => ({
            ...state,
            showForm: !this.state.showForm
        }))
    }

    render() {
        const listProjects = this.state.projects.map(project => {
            console.log("PROJECT: ", project._id)
            return (
                <div key={project.title}>
                    <Link to={{pathname: `/project/${project._id}`}}>{project.title}</Link>
                    <h4>{project.description}</h4>
                    <button className="btn btn-danger" onClick={() => this.handleDeleteProject(project._id)}>Delete</button>
                </div>
            )
        })

        return (
            <div style={{height:"500px"}}>
                <h1>Listado de proyectos</h1>
                <button className="btn btn-light" onClick={this.handleToggleForm}>
                    { !this.state.showForm ? "Add a new project" : "Close" }
                </button>
                { this.state.showForm && <ProjectCreateForm addProject={this.handleAddProject} />}
                {listProjects}
            </div>
        )
    }
}

export default Projects

// Back up code - with .then().catch()
//
// refreshData = () => {
//     axios.get("http://localhost:3001/api/projects")
//     .then(res => {
//         this.setState(state => ({
//             ...state,
//             projects: res.data
//         }))
//     })
//     .catch(err => console.log(`Error: ${err}`))
// }
