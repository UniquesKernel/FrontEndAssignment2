import React from 'react';

export function GetData(url, endPoint){
    return fetch(url+endPoint,
    {
        method: 'GET',
        credentials: 'include',
        headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem("loginToken"),
            'Content-Type': 'application/json'
        })
    })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch(error => console.warn(error));
  }






 