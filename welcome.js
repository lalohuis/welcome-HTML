const userName = localStorage.getItem('userName');

const welcomeMessage = document.getElementById('welcomeMessage');
if (userName) {
    welcomeMessage.textContent = `Hola ${userName}, bienvenido/a de nuevo.`;
} else {
    welcomeMessage.textContent = 'Hola, bienvenido/a de nuevo. Por favor ve al index e ingresa tu nombre.';
}

document.getElementById('deleteButton').addEventListener('click', function() {
    localStorage.removeItem('userName'); 
    window.location.href = 'index.html'; 
});
