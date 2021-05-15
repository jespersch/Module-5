const user_title = document.querySelector('#user-title');
const user_detail_info = document.querySelector('#user-details');
let user_details = {};

// wanneer de window laad vang de userdetails en url parameter is het variable gedeelte van de URL
window.onload = function () {
    getUserDetails(getURLParameter('user_id'));
}

async function getUserDetails(id) {         // defineer de functie getUserDetails
    await fetch('https://jsonplaceholder.typicode.com/users/' + id)     // wanneer er iets word aangeklikt vraag de info op bij de api met het volgende ID
    .then(response => response.json())
    .then(data => {
        user_details = data; // defineer dat userdetails de data is
        showUserDetails();
    })
    .catch(error => console.log(error)); // log error
}


function showUserDetails()
{
    user_title.innerHTML = `
        ${user_details.username} ID:(${user_details.id})
    `;

    user_detail_info.innerHTML = `
    <p>Straatnaam: ${user_details.address.street}</p>
    <p>Huisnummer: ${user_details.address.suite}</p>
    <p>Stad: ${user_details.address.city}</p>
    <p>Postcode: ${user_details.address.zipcode}</p>
    <p>Telefoonnummer: ${user_details.phone}</p>
    <br>
    <p>e.v.t Website: ${user_details.website}</p>
`;
}

function getURLParameter(name) 
{
return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

