document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const mensaje = document.querySelector('#mensaje').value;

        if (nombre && email && mensaje) {
            alert('Tu mensaje ha sido enviado. Gracias por contactarnos.');
            this.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});
