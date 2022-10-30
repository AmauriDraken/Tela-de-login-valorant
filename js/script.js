const inputs = document.querySelectorAll('.input');
const button = document.querySelectorAll('.login__button');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
    // Verificar o valor do Input 
    if(target.value == ''){
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const handleChange = () => {
    // Var que recebe o os valores dos inputs
    const [username, password] = inputs;

    // Removendo disable caso o valor seja menor que 8 no INPUT
    if (username.value && password.value.length >= 8) {
        button.removeAtribute('disabled');
    }
}

// Adicionando Evento de Foco 
inputs.forEach((input) => {
    input.addEventListener('focus', handleFocus);
});
// Retirando o evento de Foco 
inputs.forEach((input) => {
    input.addEventListener('focusout', handleFocusOut);
});

inputs.forEach((input) => {
    input.addEventListener('input', handleChange);
});
