import React from 'react';
import { useState } from 'react';
import { InputField } from '../InputField.js';
import './PostJobToModel.css';

export function PostJobToModel() {
    const [jobId, setJobId] = useState();
    const [modelId, setModelId] = useState();


    const handleJobIdChange = e => {
        setJobId(e.target.value);
    }

    const handleModelIdChange = e => {
        setModelId(e.target.value);
    }

    const handlerSubmit = async e => {
        e.preventDefault();
        await AddJobToModel({ jobId, modelId });
    }

    return (
        <div class="ManagerForm">
            <h1> Add Model To Job </h1>
            <form type="submit" onSubmit={handlerSubmit}>
                <InputField name="Job Id" type="number" value={jobId} onChange={handleJobIdChange} />
                <InputField name="Model Id" type="number" value={modelId} onChange={handleModelIdChange} />
                <div className="ManagerSubmitButton">
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
}

async function AddJobToModel(userCredentials) {
    let url = 'https://localhost:7181/api/Jobs/' + userCredentials.jobId + '/model/' + userCredentials.modelId
    try {
        let responds = await fetch(url,
            {
                method: 'POST',
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