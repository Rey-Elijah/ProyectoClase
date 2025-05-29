const form = document.getElementById('form-comentario');
const lista = document.getElementById('lista-comentarios');

// Mostrar comentarios al cargar la página
function cargarComentarios() {
    const pagina = window.location.pathname; //nombre de ruta
    fetch(`/comentarios?pagina=${encodeURIComponent(pagina)}`)
    .then(res => res.json())
    .then(data => {
        lista.innerHTML = '';
        data.forEach(c => {
            const div = document.createElement('div');
            div.classList.add('comentario');
            div.innerHTML = `
                <span class="nombre">${c.nombre}</span>: 
                <span class="mensaje">${c.mensaje}</span>
            `;
            lista.appendChild(div);
        });
    });
}


// Enviar nuevo comentario
form.addEventListener('submit', e => {
    e.preventDefault();
    const comentario = {
        nombre: document.getElementById('nombre').value,
        mensaje: document.getElementById('mensaje').value,
        pagina: window.location.pathname  // Por ejemplo: /pages/albums.html
    };
    fetch('/comentarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comentario)
    }).then(() => {
        form.reset();         // Limpia el formulario
        cargarComentarios();  // Refresca los comentarios
    });
});

  // Cargar al principio
  cargarComentarios();