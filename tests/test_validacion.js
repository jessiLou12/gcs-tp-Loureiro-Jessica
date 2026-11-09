const assert = require("assert");

function validarTelefono(tel) {
    return /^[0-9]+$/.test(tel);
}

// Pruebas de validación
assert.strictEqual(validarTelefono("2804123456"), true);
assert.strictEqual(validarTelefono("123456789"), true);
assert.strictEqual(validarTelefono("abc123"), false);
assert.strictEqual(validarTelefono("280-123"), false);
assert.strictEqual(validarTelefono(""), false);

console.log("Todas las pruebas fueron ejecutadas correctamente.");// Pruebas del proyecto - versión inicial
