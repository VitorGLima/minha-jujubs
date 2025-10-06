document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const statusMessage = document.querySelector('.status-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            statusMessage.textContent = 'Por favor, preencha todos os campos.';
            statusMessage.style.color = '#ff6b6b';
            return;
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(password)) {
            statusMessage.textContent = 'A senha deve conter letras e números e ter no mínimo 6 caracteres.';
            statusMessage.style.color = '#ff6b6b';
            return;
        }
        
        statusMessage.textContent = 'Acesso em análise...';
        statusMessage.style.color = '#fdbb2d';

        setTimeout(() => {
            statusMessage.textContent = 'Sua conta está em processo de criação. Aguarde atualizações!';
            statusMessage.style.color = '#76c7c0';
            
            usernameInput.value = '';
            passwordInput.value = '';

            setTimeout(() => {
                statusMessage.textContent = '';
            }, 5000);
            
        }, 2000);
    });
});