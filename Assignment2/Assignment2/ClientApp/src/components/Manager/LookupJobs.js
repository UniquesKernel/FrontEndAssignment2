import React from 'react';
import { useState } from 'react';
import { InputField } from '../InputField.js';
import './LookupJobs.css';

export function LookupJobs() {
    const [jsonObject, setJsonObject] = useState();
    const jobList = []
    let modelList = [];

    const handleGetJobs = async e => {
        let json = await GetJobs();
        json = Object.values(json);
        setJsonObject(json);
    }




    for (let job in jsonObject) {
        modelList = [];
        for (let model in jsonObject[job].models) {
            const modelRow = (
                <tr>
                    <td className="jobRow"> {jsonObject[job].models[model].firstName + " " + jsonObject[job].models[model].lastName}</td>
                </tr>
            );

            modelList.push(modelRow)

        }
        console.log(modelList)
        const row = (
            <tr id={jsonObject[job].jobId}>
                <td className="jobRow"> {jsonObject[job].jobId} </td>
                <td className="jobRow"> {jsonObject[job].customer} </td>
                <td className="jobRow"> {jsonObject[job].days} </td>
                <td className="jobRow"> {jsonObject[job].location} </td>
                <td className="jobRow"> {jsonObject[job].comments} </td>
                {modelList}
            </tr>
        );
        jobList.push(row);
    }

    return (
        <div class="ManagerForm">
            <h1> All Jobs </h1>
            <table>
                <thead>
                    <tr>
                        <th> Job Id </th>
                        <th> Customer </th>
                        <th> Days </th>
                        <th> Location </th>
                        <th> Comments </th>
                        <th> Models </th>
                    </tr>
                </thead>
                <tbody>
                    {jobList}
                </tbody>
            </table>
            <button type="submit" onClick={handleGetJobs}>Load Jobs</button>
        </div>
    )
}

async function GetJobs() {
    let url = 'https://localhost:7181/api/Jobs'
    return fetch(url,
        {
            method: 'GET',
            credentials: 'include',
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
        .catch(error => console.warn(error));
}

