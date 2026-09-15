// script.js

// Scroll suave al hacer clic en los links del menú
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // ajusta según altura del header
        behavior: 'smooth'
      });
    }
  });
});

// Ejemplo: manejar envío de formularios (por ahora solo evita recarga)
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Formulario enviado (acá después podés conectar al backend).');
  });
});
