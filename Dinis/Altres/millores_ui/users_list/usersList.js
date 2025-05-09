// Crea una funcio que retorna una llista de usuaris
function getUsers() {
}   

const userList = document.getElementById('userList');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.array.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            userCard.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <button onClick="toggleDetails(${user.id})">Veure més</button>
                <div id="details-${user.id}" class="hidden">
                    <p>Telèfon: ${user.phone}</p>
                    <p>Adreça: ${user.address.street}, ${user.address.city}</p>
                </div>
            `;

            userList.appendChild(userCard);
        });
    })
    .catch(error => console.error('Error cargant els usuaris:', error));
