function validateForm(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Alterei os const para var, para verificar se vai mudar algo 

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
    }else
    alert('Cadastro bem-sucedido!');}
    
    function logar(){

        var name = document.getElementById('name').value;
        var password = document.getElementById('password').value;
        var email = document.getElementById('email').value;
    
        if(name == "" || email == "" || password == ""){
            alert("Por favor, preencha todos os campos")
        }else{
            alert("Bem-vindo(a)!")
        }
    
    }