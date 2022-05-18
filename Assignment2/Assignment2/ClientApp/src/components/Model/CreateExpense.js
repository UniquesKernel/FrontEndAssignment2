import React from 'react';
import { useState } from 'react';
import { InputField } from '../InputField.js';
import './CreateExpense.css';

export function CreateExpense() {
    const [amount, setAmount] = useState();
    const [jobId, setJobId] = useState();
    const [modelId, setModelId] = useState();
    const [date, setDate] = useState();
    const [text, setText] = useState();


    const handleAmountChange = e => {
        setAmount(e.target.value);
    }

    const handleJobIdChange = e => {
        setJobId(e.target.value);
    }
    const handleModelIdChange = e => {
        setModelId(e.target.value);
    }
    const handleDateChange = e => {
        setDate(e.target.value);
    }
    const handleTextChange = e => {
        setText(e.target.value);
    }


    const handlerSubmit = async e => {
        e.preventDefault();
        await PostUser({ amount, jobId, modelId, date, text });
    }

    return (
        <div class="ManagerForm">
            <h1> New Expense Form </h1>
            <form type="submit" onSubmit={handlerSubmit}>
                <InputField name="Amount" type="decimal" value={amount} onChange={handleAmountChange} />
                <InputField name="Job Id" type="number" value={jobId} onChange={handleJobIdChange} />
                <InputField name="Model Id" type="number" value={modelId} onChange={handleModelIdChange} />
                <InputField name="Date" type="datetime-local" value={date} onChange={handleDateChange} />
                <InputField name="Text" type="text" value={text} onChange={handleTextChange} />
                <div className="ManagerSubmitButton">
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
}

async function PostUser(userCredentials) {
    let url = 'https://localhost:7181/api/Expenses'
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