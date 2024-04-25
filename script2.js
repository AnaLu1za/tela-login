const email = document.getElementById('email').value;

email.setAttribute('required', true);

const loginForm = document.getElementById('login_form');

loginForm.addEventListener('submit', (event) => {
    if (email === ''){
        event.preventDefault();
        alert('Por favor, informe seu e-mail.')
    }
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href='index.html';
})