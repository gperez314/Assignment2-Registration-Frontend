// Name: Assignement2
// Course Code: SODV1201
// Class: Introduction to Web Programming
// Author: Glenn Perez
// ==============================================================================================================
// BVC SPORTS CLUB REGISTRATION WEBSITE - FRONT END
// ==============================================================================================================

// Import module to set date on footer
import {
    SetDate
} from './footer.js';
SetDate(); // Set current date on footer

// Get user confimation data from backend
fetch('http://localhost:7000/user')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        // Store query selectors in variables
        let id = document.querySelector('#idNo');
        let name = document.querySelector('#name');
        let address = document.querySelector('#address');
        let status = document.querySelector('#status');
        let fee = document.querySelector('#fee');

        // Update user information in the page
        id.innerHTML = data.id;
        name.innerHTML = data.name;
        address.innerHTML = data.address;
        status.innerHTML = data.status.charAt(0).toUpperCase() + data.status.slice(1);
        fee.innerHTML = '$' + data.fee;
    });

// Function to go back to registration page
document.querySelector('#confirm').addEventListener('click', () => {
    window.location.href = 'index.html';
})