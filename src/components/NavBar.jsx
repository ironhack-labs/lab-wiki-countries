import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='navbar'>
            <ul>
         <li>   <Link to={'/'}>Home</Link></li>
         <li>  <Link to={'/countries'}>Countries</Link></li>
</ul>
        </div>
    )
}
