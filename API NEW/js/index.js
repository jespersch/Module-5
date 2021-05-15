const tbody = document.querySelector('#user-list');
let users = [];


window.onload = () => {
    fetchUsers();
}


async function fetchUsers()
{

    await fetch('https://jsonplaceholder.typicode.com/users')

            .then(response => {
                return response.json();     // Data kan niet standaard worden gelezen dus zet het om naar JSON
            })
            .then(data => {
                users = data;               

                addUsersToTable();
            })
            .catch(error => console.log(error));
}


function addUsersToTable()
{
    users.forEach( user => {
        let table_row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td><a class="waves-effect waves-light btn" href="http://127.0.0.1:5500/post.html?user_id=${user.id}">Meer informatie></a></td>
            </tr>
        `;

        tbody.innerHTML += table_row;
    });
}