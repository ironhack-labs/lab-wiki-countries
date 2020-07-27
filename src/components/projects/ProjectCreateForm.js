import React, { useState } from 'react'

function ProjectCreateForm(props) {

    const [state, setState] = useState({
        title: "",
        description: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setState(state => ({
            ...state,
            [name]: value
        }))

    }

    const resetForm = () => {
        setState(state => ({
            title: "",
            description: ""
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addProject(state)
        resetForm()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" value={state.title} onChange={handleChange}/>

                <label htmlFor="description">Description:</label>
                <input type="text" name="description" value={state.description} onChange={handleChange}/>

                <input type="submit" value="send" />
            </form>
        </div>
    )
}

export default ProjectCreateForm
