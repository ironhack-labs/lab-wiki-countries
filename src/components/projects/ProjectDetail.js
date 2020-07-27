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

    useEffect(refreshProject => {
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

// import React, { Component } from 'react'
// import axios from 'axios'
// import ProjectCreateForm from './ProjectCreateForm'
// export class ProjectDetail extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             project: "",
//             showForm: false     
//         }
//     }

//     componentDidMount() {
//         this.getProject()  
//     }

//     getProject = async () => {
//         try {
//             const response = await axios.get(`http://localhost:3001/api/projects/${this.props.match.params.id}`)
//             this.setState(state => ({
//                 ...state,
//                 project: response.data
//             }))
//         } catch(err) {
//             console.log("AXIOS ERROR : ", err);
//         }
//     }

//     handleUpdateProject = async project => {
//         try {
//             await axios.put(`http://localhost:3001/api/projects/${this.props.match.params.id}`, project)
//             this.handleToggleForm()
//             this.getProject()
//         } catch(err) {
//             console.log("AXIOS ERROR : ", err);
//         }
//     }

//     handleDeleteProject = async id => {
//         try {
//             await axios.delete(`http://localhost:3001/api/projects/${this.props.match.params.id}`)
//             this.props.history.push('/')
//         } catch(err) {
//             console.log("AXIOS ERROR : ", err);
//         }
//     }

//     handleToggleForm = (e) => {
//         this.setState(state => ({
//             ...state,
//             showForm: !this.state.showForm
//         }))
//     }

//     render() {
//         let projectDetail = 
//             <div>
//                 <h2>{this.state.project.title}</h2>
//                 <p>{this.state.project.description}</p>
//             </div>

//         return (
//             <div>
//                 <button className="btn btn-light" onClick={this.handleToggleForm}>
//                     { !this.state.showForm ? "Edit project" : "Close" }
//                 </button>
//                 { this.state.showForm && <ProjectCreateForm addProject={this.handleUpdateProject} />}
//                 {projectDetail}
//                 <button className="btn btn-danger" onClick={() => this.handleDeleteProject(this.props.match.params.id)}>Delete</button>
//             </div>
//         )
//     }
// }

// export default ProjectDetail

