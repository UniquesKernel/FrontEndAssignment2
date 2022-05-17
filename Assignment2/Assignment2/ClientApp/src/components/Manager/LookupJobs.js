import React from 'react';
import { useState } from 'react';
import { InputField } from '../InputField.js';
import './CreateUser.css';
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

export function LookupJobs() {
    const [jsonObject, setJsonObject] = useState();

    const handleGetJobs = async e => {
        let json = await GetJobs();
        json = Object.values(json);
        setJsonObject(json);
        console.log(jsonObject);
    }

    return (
        <div class="ManagerForm">
            <h1> All Jobs </h1>
            <table>
                <thead>
                    <tr>
                        <th> Job Id </th>
                        <th> Job Id </th>
                        <th> Job Id </th>
                        <th> Job Id </th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            </div>
    )
}

async function GetJobs() {
    let url = 'https://localhost:7181/api/Jobs'
    try {
        let responds = await fetch(url,
            {
                method: 'GET',
                credentials: 'include',
                headers: new Headers({
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                })
            });

        if (responds.ok) {
            alert("Hurray");
            return await responds.json();
        }
        else {
            alert("Server returned: " + responds.statusText);
        }
    } catch (err) {
        alert("Error: " + err);
    }
    return;

}

export const columns = [
    {
        name: "JobId",
        selector: "jobId",
        sortable: true
    },
    {
        name: "Customer",
        selector: "customer",
        sortable: true
    },
    {
        name: "Days",
        selector: "days",
        sortable: true,
    },
    {
        name: "Location",
        selector: "location",
        sortable: true
    },
    {
        name: "Comments",
        selector: "comments",
        sortable: true
    }
];
