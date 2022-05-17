import React from 'react';
import { useState } from 'react';
import { InputField } from '../InputField.js'
import './CreateModel.css'

export function CreateModel() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [addresLine1, setAddresLine1] = useState();
    const [addresLine2, setAddresLine2] = useState();
    const [zip, setZip] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [birthDate, setBirthDate] = useState();
    const [nationality, setNationality] = useState();
    const [height, setHeight] = useState();
    const [shoeSize, setShoeSize] = useState();
    const [hairColor, setHairColor] = useState();
    const [eyeColor, setEyeColor] = useState();
    const [comments, setComments] = useState();
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

    const handlePhoneNoChange = e => {
        setPhoneNo(e.target.value);
    }

    const handleAddresLine1Change = e => {
        setAddresLine1(e.target.value);
    }

    const handleAddresLine2Change = e => {
        setAddresLine2(e.target.value);
    }

    const handleZipChange = e => {
        setZip(e.target.value);
    }

    const handleCityChange = e => {
        setCity(e.target.value);
    }

    const handleCountryChange = e => {
        setCountry(e.target.value);
    }

    const handleBirthDateChange = e => {
        setBirthDate(e.target.value);
    }

    const handleNationalityChange = e => {
        setNationality(e.target.value);
    }

    const handleHeightChange = e => {
        setHeight(e.target.value);
    }

    const handleShoeSizeChange = e => {
        setShoeSize(e.target.value);
    }

    const handleHairColorChange = e => {
        setHairColor(e.target.value);
    }

    const handleEyeColorChange = e => {
        setEyeColor(e.target.value);
    }

    const handleCommentsChange = e => {
        setComments(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleSubmit = async e => {
        e.preventDefault();
        let credential = {
            firstName,
            lastName,
            email,
            phoneNo,
            addresLine1,
            addresLine2,
            zip,
            city,
            country,
            birthDate,
            nationality,
            height,
            shoeSize,
            hairColor,
            eyeColor,
            comments,
            password
        };
        console.log(credential);
        await PostModel(credential);
    }

    return (
        <div id="ModelForm" class="ManagerForm">
            <h1> New Model Form </h1>
            <form type="submit" onSubmit={handleSubmit}>
                <div class="inputBlock">
                    <InputField type="Text" name="First Name" value={firstName} onChange={handleFirstNameChange}/>
                    <InputField type="Text" name="Last Name" value={lastName} onChange={handleLastNameChange} />
                    <InputField type="Email" name="Email" value={email} onChange={handleEmailChange} />
                    <InputField type="Text" name="Phone Number" value={phoneNo} onChange={handlePhoneNoChange} />
                </div>
                <div class="inputBlock">
                    <InputField type="Text" name="Address 1" value={addresLine1} onChange={handleAddresLine1Change} />
                    <InputField type="Text" name="Address 2" value={addresLine2} onChange={handleAddresLine2Change} />
                    <InputField type="Text" name="Zip Code" value={zip} onChange={handleZipChange} />
                    <InputField type="Text" name="City" value={city} onChange={handleCityChange} />
                </div>
                <div class="inputBlock">
                    <InputField type="Text" name="Country" value={country} onChange={handleCountryChange}/>
                    <InputField type="Datetime-local" name="Birth Day" value={birthDate} onChange={handleBirthDateChange} />
                    <InputField type="Text" name="Nationality" value={nationality} onChange={handleNationalityChange} />
                    <InputField type="number" name="Height (cm)" value={height} onChange={handleHeightChange} />
                </div>
                <div class="inputBlock">
                    <InputField type="number" name="Shoe Size" value={shoeSize} onChange={handleShoeSizeChange} />
                    <InputField type="Text" name="Hair Color" value={hairColor} onChange={handleHairColorChange} />
                    <InputField type="Text" name="Eye Color" value={eyeColor} onChange={handleEyeColorChange} />
                    <InputField type="Text" name="Comments" value={comments} onChange={handleCommentsChange} />
                </div>
                <div class="inputBlock">
                    <InputField type="password" name="Password" value={password} onChange={handlePasswordChange} />
                </div>
                <div class="ModelSubmitButton">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

async function PostModel(modelCredentials) {
    let url = 'https://localhost:7181/api/Models'
    try {
        let responds = await fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(modelCredentials),
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