import React from 'react';
import { useState } from 'react';
import { InputField } from '../InputField.js';
import './CreateJob.css';

export function CreateJob() {
    const [customer, setCustomer] = useState();
    const [startDate, setStartDate] = useState();
    const [days, setDays] = useState();
    const [location, setLocation] = useState();
    const [comments, setComments] = useState();


    const handleCustomerChange = e => {
        setCustomer(e.target.value);
    }

    const handleStartDateChange = e => {
        setStartDate(e.target.value);
    }
    const handleDaysChange = e => {
        setDays(e.target.value);
    }
    const handleLocationChange = e => {
        setLocation(e.target.value);
    }
    const handleCommentsChange = e => {
        setComments(e.target.value);
    }


    const handlerSubmit = async e => {
        e.preventDefault();
        await PostUser({ customer, startDate, days, location, comments });
    }

    return (
        <div class="ManagerForm">
            <h1> New Job Form </h1>
            <form type="submit" onSubmit={handlerSubmit}>
                <InputField name="Customer" type="text" value={customer} onChange={handleCustomerChange} />
                <InputField name="Start Date" type="Datetime-local" value={startDate} onChange={handleStartDateChange} />
                <InputField name="Days" type="number" value={days} onChange={handleDaysChange} />
                <InputField name="Loccation" type="text" value={location} onChange={handleLocationChange} />
                <InputField name="Comments" type="text" value={comments} onChange={handleCommentsChange} />
                <div className="ManagerSubmitButton">
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
}

async function PostUser(userCredentials) {
    let url = 'https://localhost:7181/api/Jobs'
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