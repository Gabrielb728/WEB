document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    const validUsername ='admin';
    const validPassword = '12345';
    
    // Exemplo simples de verificação
    if (username === 'validUsername' && password === 'validPassword') {
        messageElement.textContent = 'Login bem-sucedido!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Usuário ou senha incorretos.';
        messageElement.style.color = 'red';
    }
});
