import React from 'react';
import { LogOut } from '../Logout/Logout.js'
import { NavLink } from 'react-router-dom';
import { Navbar } from 'reactstrap';

export function NavigationBar() {
    return(
        <div className="Navbar">
            <Navbar>
                <NavLink to="/logout" onClick={LogOut}>Logout</NavLink>
            </Navbar>
        </div>
    )
}