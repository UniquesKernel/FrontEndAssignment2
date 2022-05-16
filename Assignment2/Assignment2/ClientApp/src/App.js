import React, { Component } from 'react';
import { useState } from 'react';
import { NavigationBar } from './components/NavigationBar/NavigationBar.js'
import Login from './components/Login/Login.js'
import {LogOut} from './components/Logout/Logout.js'
import { Home } from './components/Home';
import { Manager }from './components/Manager/Manager.js'
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import './custom.css'
import { Navbar } from 'reactstrap';
import jwtDecode from 'jwt-decode';
import { CreateUser } from './components/Manager/CreateUser.js';

export default function App() {
    let token = localStorage.getItem("token");
    var role;
    if (token != null) {
        var payload = jwtDecode(token);
        role = payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    }


    if (!token)
    {
        return (
            <>
                <Login />
            </>
        );
    }

    if (role = "Manager") {
        return (
            <>
                <Manager/>
            </>
        )
    }

    if (role = "Model") {
        return (
            <>
                <NavigationBar/>
            </>
            )
    }

    return (
        <div className="App">
            <NavigationBar/>    
            <div className="Body">
                <h1>Aflevering 2</h1>
                <Home/>
                <button onClick={LogOut}>Logout</button>
            </div>
        </div>
    );


}


