import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/nothome">Not Home</Link>
        </div>
        <div>
            <Link to="/alsonothome">Also Not Home</Link>
        </div>

    </div>
  )
}

export default Nav