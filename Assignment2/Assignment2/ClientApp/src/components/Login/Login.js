import React from 'react';
import { useState } from 'react';
import { Route } from 'workbox-routing';
import './Login.css'

export default function Login() {
    const [email, setEmail] = useState();
    const [password, SetPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        await loginUser({
            email,
            password
        })
        window.location.replace("/");
    }

    return (
        <div class="Wrapper">
            <h1> Please Login </h1>
            <form onSubmit={handleSubmit}>
                <label class="Login">
                    <p> Email </p>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                </label>
                <label class="Login">
                    <p> Password </p>
                    <input type="password" onChange={e => SetPassword(e.target.value)} />
                </label>
                <div class="submitButton">
                    <button type="submit">Submit</button>
                </div>
            </form>
           
        </div>
        )
}

async function loginUser(credentials) {
    let url = 'https://localhost:7181/api/account/login'
    try {
        let responds = await fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            });

        if (responds.ok) {
            let token = await responds.json();
            localStorage.setItem("token", token.jwt);
        }
        else {
            alert("Server returned: " + responds.statusText);
        }
    } catch (err) {
        alert("Error: " + err);
    }
    return;

}