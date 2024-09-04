
function fetchUsuarios() {
    fetch('http://localhost:3000/api/usuarios')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#usuarios-table tbody');
        tableBody.innerHTML = ''; 
        data.forEach(usuario => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
            `;
            tableBody.appendChild(tr);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar usuários:', error);
    });
}
window.onload = fetchUsuarios;
