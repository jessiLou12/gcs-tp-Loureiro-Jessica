const form = document.getElementById("formCliente");
const mensaje = document.getElementById("mensaje");

function registrarCliente(nombre, correo, telefono) {
    if (!nombre || !correo || !telefono) {
        return "Todos los campos son obligatorios";
    }

    return "Cliente registrado correctamente";
}

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;

        mensaje.textContent = registrarCliente(nombre, correo, telefono);
    });
}
