const formLogin = document.getElementById('form-login');
const formRegistro = document.getElementById('form-registro');


const btnIrARegistro = document.getElementById('btn-ir-a-registro');
const btnAtras = document.getElementById('btn-atras'); 
btnIrARegistro.addEventListener('click', () => {
    formLogin.classList.add('oculto');       
    formRegistro.classList.remove('oculto'); 
});

btnAtras.addEventListener('click', () => {
    formRegistro.classList.add('oculto');    
    formLogin.classList.remove('oculto');    
});
