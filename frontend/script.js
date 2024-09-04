document.getElementById('cadastro-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    fetch('http://localhost:3000/api/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email })
    })
    .then(response => response.json())
    .then(data => {
        const mensagem = document.getElementById('mensagem');
        if (data.error) {
            mensagem.style.color = 'red';
            mensagem.textContent = `Erro: ${data.error}`;
        } else {
            mensagem.style.color = 'green';
            mensagem.textContent = 'Usuário cadastrado com sucesso!';
            document.getElementById('cadastro-form').reset();
        }
    })
    .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
    });
});
