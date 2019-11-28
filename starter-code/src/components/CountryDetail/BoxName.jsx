import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';


const BoxName = ({children, active, image}) => {
    return(
        <div>
        <a class={active} className="list-group-item list-group-item-action">
            {children}
        </a>

        </div>
    );
}

export default BoxName