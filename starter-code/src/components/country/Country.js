import React from 'react'

const Country = props => <a className="list-group-item list-group-item-action" href={props.cca3}> {props.flag} {props.name.common}</a>

export default Country