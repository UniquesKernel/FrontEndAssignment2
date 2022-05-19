import React from 'react';
import { useState, useEffect} from 'react';
import DataTable, { ExpanderComponentProps } from 'react-data-table-component';
import "react-data-table-component-extensions/dist/index.css";
import { GetData } from './GetData';
import { url } from './ApiVars';
import { JobsGet } from './ApiVars';


export function JobsListTable() {
    const [data, setData] = useState();

    useEffect(() => {
        GetData(url, JobsGet)
            .then(data => { setData(data) });
    }, []);

    console.log(data)
    return (
        <div className="main" >
            <DataTable
                columns={columns}
                data={data}
                noHeader
                defaultSortField="id"
                defaultSortAsc={false}
                pagination
                highlightOnHover
            />
        </div >
	);
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
    },
    {
        name: "Location",
        selector: "location",
        sortable: true
    },
    {
        name: "StartDate",
        selector: "startDate",
        sortable: true
    }
];