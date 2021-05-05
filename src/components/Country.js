import { Link } from 'react-router-dom'

const Country = ({ name, flag, cca3 }) => {

    return (
        <Link to={'/' + cca3}>{flag}{name}<hr></hr></Link>
        
    )
        
}


export default Country