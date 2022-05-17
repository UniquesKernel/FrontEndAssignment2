import { NavigationBar } from '../NavigationBar/NavigationBar.js'
import React from 'react';
import {
    useState,
} from 'react';

import { CreateUser } from './CreateUser.js';
import { CreateModel } from './CreateModel.js';
import { CreateJob } from './CreateJob.js';
import { PostJobToModel } from './PostJobToModel.js';
import { ToggleButton } from '../ToggleButton.js';
import './Manager.css'
import { DeleteJobFromModel } from './DeleteJobFromModel.js';
import { LookupJobs } from './LookupJobs.js';

export function Manager() {
    const [showManagerForm, setShowManagerForm] = useState();
    const [showModelForm, setShowModelForm] = useState();
    const [showJobForm, setShowJobForm] = useState();
    const [showJobModelForm, setShowJobModelForm] = useState();
    const [showRemoveModelJobForm, setShowRemoveModelJobForm] = useState();
    const [showJobLookup, setJobLookup] = useState();

    let managerForm;
    let modelForm;
    let jobForm;
    let jobModelForm;
    let deleteModelJobForm;
    let jobLookup;

    const handleManagerFormClick = e => {
        if (typeof showManagerForm === 'undefined') {
            setShowManagerForm(false);
        }
        setShowManagerForm(!showManagerForm);
    }

    const handleModelFormClick = e => {
        if (typeof showModelForm === 'undefined') {
            setShowModelForm(false);
        }
        setShowModelForm(!showModelForm);
    }

    const handleJobFormClick = e => {
        if (typeof showJobForm === 'undefined') {
            setShowJobForm(false);
        }
        setShowJobForm(!showJobForm);
    }

    const handleJobModelFormClick = e => {
        if (typeof showJobModelForm === 'undefined') {
            setShowJobModelForm(false);
        }
        setShowJobModelForm(!showJobModelForm);
    }   

    const handleRemoveModelJobFormClick = e => {
        if (typeof showRemoveModelJobForm === 'undefined') {
            setShowRemoveModelJobForm(false);
        }
        setShowRemoveModelJobForm(!showRemoveModelJobForm);
    }

    const handleJobLookupClick = e => {
        if (typeof showJobLookup === 'undefined') {
            setJobLookup(false);
        }
        setJobLookup(!showJobLookup);
    }


    if (showManagerForm === true) {
        managerForm = <CreateUser />;
    }

    if (showModelForm === true) {
        modelForm = <CreateModel />;
    }

    if (showJobForm === true) {
        jobForm = <CreateJob />;
    }

    if (showJobModelForm === true) {
        jobModelForm = <PostJobToModel />;
    }

    if (showRemoveModelJobForm === true) {
        deleteModelJobForm = <DeleteJobFromModel />;
    }

    if (showJobLookup == true) {
        jobLookup = <LookupJobs />;
    }

    return (
        <>
            <NavigationBar />
            
            <h1> Welcome to the manager Page </h1>
            <p>
                Here the manager can create new managers and models. <br/>
                Simply click on the buttons to show the forms.
            </p>


            <div class="formButton">
                <ToggleButton text="Manager Form" value={showManagerForm} onChange={handleManagerFormClick} />
                {managerForm}
            </div>
            <div class="formButton">
                <ToggleButton text="Model Form" vale={showModelForm} onChange={handleModelFormClick}/>
                {modelForm}
            </div>
            <div class="formButton">
                <ToggleButton text="Job Form" value={showJobForm} onChange={handleJobFormClick} />
                {jobForm}
            </div>
            <div class="formButton">
                <ToggleButton text="Job To Model" value={showJobModelForm} onChange={handleJobModelFormClick} />
                {jobModelForm}
            </div>
            <div class="formButton">
                <ToggleButton text="Remove Model From Job" value={showJobModelForm} onChange={handleRemoveModelJobFormClick} />
                {deleteModelJobForm}
            </div>
            <div class="formButton">
                <ToggleButton text="Lookup Jobs" value={showJobLookup} onChange={handleJobLookupClick} />
                {jobLookup}
            </div>
        


        </>
        )

}