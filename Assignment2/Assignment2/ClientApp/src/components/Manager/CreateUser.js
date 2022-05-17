import React from 'react';
import { useState } from 'react';
import { InputField } from '../InputField.js';
import './CreateUser.css';

export function CreateUser() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    
    const handleFirstNameChange = e => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = e => {
        setLastName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handlerSubmit = async e => {
        e.preventDefault();
        await PostUser({ firstName, lastName, email, password });
    }

    return(
        <div class="ManagerForm">
            <h1> New Manager Form </h1>
            <form type="submit" onSubmit={handlerSubmit}>
                <InputField name="First Name" type="text" value={firstName} onChange={handleFirstNameChange} />
                <InputField name="Last Name" type="text" value={lastName} onChange={handleLastNameChange} />
                <InputField name="Email" type="email" value={email} onChange={handleEmailChange} />
                <InputField name="Password" type="password" value={password} onChange={handlePasswordChange} />
                <div className="ManagerSubmitButton">
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
}

async function PostUser(userCredentials) {
    let url = 'https://localhost:7181/api/Managers'
    try {
        let responds = await fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(userCredentials),
                credentials: 'include',
                headers: new Headers({
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                })
            });

        if (responds.ok) {
            alert("Hurray");
            window.location.replace("/");
        }
        else {
            alert("Server returned: " + responds.statusText);
        }
    } catch (err) {
        alert("Error: " + err);
    }
    return;

}