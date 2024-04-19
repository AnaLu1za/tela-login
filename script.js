function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validação simples: Verifica se os campos não estão vazios
    if (name === '' || email === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação do formato de e-mail usando uma expressão regular simples
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    // Se chegou até aqui, o formulário e
    alert('Cadastro bem-sucedido!');}