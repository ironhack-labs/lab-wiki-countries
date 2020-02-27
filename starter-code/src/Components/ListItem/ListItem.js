import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const ListItem = props => {

    return (
        <Link to={`/${props.id}`}> <ListGroup.Item className="list-item">{props.name}</ListGroup.Item> </Link>
    )

}
export default ListItem;
