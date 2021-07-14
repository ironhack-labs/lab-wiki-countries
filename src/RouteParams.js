import { Link } from 'react-router-dom'

const RouteParams = props => {

    console.log('ESTE ES EL OBJETO DE PROPS DE RRD', props)

    const { cca3 } = props.match.params

    return (
        <div>
            <h3>{cca3}</h3>
            <Link to="/">Volver a inicio</Link>

        </div>
    )
}

export default RouteParams