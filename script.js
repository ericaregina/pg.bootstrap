document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('exampleForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        messageDiv.innerHTML = `<div class="alert alert-success" role="alert">
                                    Obrigado, ${name}! Seu email (${email}) foi enviado com sucesso.
                                </div>`;
        form.reset();
    });
});
