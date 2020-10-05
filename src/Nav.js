import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <div className="Nav container-fluid">
            <div className='row title'>
                <div className='col-7'>
                    <h1>DATA DISCOVERY:</h1>
                    <p>Earth Science</p>
                </div>
            </div>
            <div className='row nav'>
                <nav className='col-6'>
                    <NavLink exact to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to='/sources'>
                        Sources
                    </NavLink>
                    <NavLink to='/NewResourceForm'>
                        Add Resource
                    </NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Nav;