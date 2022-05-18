import React from 'react';
import { useState } from 'react';
import './ModelJobLookup.css';

export function ModelJobLookup() {
    const [jsonObject, setJsonObject] = useState();
    const jobList = []

    const handleGetJobs = async e => {
        let json = await GetJobs();
        json = Object.values(json);
        setJsonObject(json);
    }

    for (let job in jsonObject) {
        const row = (
            <tr id={jsonObject[job].jobId}>
                <td className="jobRow"> {jsonObject[job].jobId} </td>
                <td className="jobRow"> {jsonObject[job].customer} </td>
                <td className="jobRow"> {jsonObject[job].days} </td>
                <td className="jobRow"> {jsonObject[job].location} </td>
                <td className="jobRow"> {jsonObject[job].comments} </td>
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

