// Name: Assignement2
// Course Code: SODV1201
// Class: Introduction to Web Programming
// Author: Glenn Perez
// ==============================================================================================================
// BVC SPORTS CLUB REGISTRATION WEBSITE - FRONT END
// ==============================================================================================================

// Function to get current date
function SetDate() {
    const now = new Date();
    // Constants to display month as text
    const m = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    document.querySelector('#date').textContent = m[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();
}

export {SetDate};