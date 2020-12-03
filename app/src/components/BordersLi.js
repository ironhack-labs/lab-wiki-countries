import { NavLink } from 'react-router-dom'

const BorderLi = ({ code, name }) => {
    return (
        <li><NavLink to={'/details?code=' + code}>{name}</NavLink></li>
    )
}

export default BorderLi