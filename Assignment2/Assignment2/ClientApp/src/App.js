import React from 'react';
import { NavigationBar } from './components/NavigationBar/NavigationBar.js'
import Login from './components/Login/Login.js'
import {LogOut} from './components/Logout/Logout.js'
import { Home } from './components/Home';
import { Manager } from './components/Manager/Manager.js'
import { Model } from './components/Model/Model.js';
import './custom.css'
import jwtDecode from 'jwt-decode';

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

    if (role === "Manager") {
        return (
            <>
                <Manager/>
            </>
        )
    }

    if (role === "Model") {
        return (
            <>
                <Model/>
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


