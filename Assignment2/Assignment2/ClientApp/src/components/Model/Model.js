import { NavigationBar } from '../NavigationBar/NavigationBar.js'
import React from 'react';
import {
    useState,
} from 'react';

import { ToggleButton } from '../ToggleButton.js';
import './Model.css'
import { ModelJobLookup } from './ModelJobLookup.js';
import { CreateExpense } from './CreateExpense.js';

export function Model() {
    const [showExpenseForm, setShowExpenseForm] = useState();
    const [showJobLookup, setJobLookup] = useState();

    let jobLookup;
    let expenseForm;

    const handleExpenseFormClick = e => {
        if (typeof showExpenseForm === 'undefined') {
            setShowExpenseForm(false);
        }
        setShowExpenseForm(!showExpenseForm);
    }

    
    const handleJobLookupClick = e => {
        if (typeof showJobLookup === 'undefined') {
            setJobLookup(false);
        }
        setJobLookup(!showJobLookup);
    }

    if (showJobLookup == true) {
        jobLookup = <ModelJobLookup />;
    }

    if (showExpenseForm == true) {
        expenseForm = <CreateExpense />;
    }

    return (
        <>
            <NavigationBar />

            <h1> Welcome to the Model Page </h1>
            <p>
                Here the model can Manage expense and retrieve jobs. <br />
                Simply click on the buttons to show the forms.
            </p>


            <div class="formButton">
                <ToggleButton text="Lookup Jobs" value={showJobLookup} onChange={handleJobLookupClick} />
                {jobLookup}
            </div>
            <div class="formButton">
                <ToggleButton text="New Expense Form" value={showExpenseForm} onChange={handleExpenseFormClick} />
                {expenseForm}
            </div>



        </>
    )

}