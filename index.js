document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('validationCustom01').value;
    if (name) {
        localStorage.setItem('userName', name); 
        window.location.href = 'welcome.html'; 
    } else {
        document.getElementById('validationCustom01').classList.add('is-invalid');
    }
});
