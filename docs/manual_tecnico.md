# Manual Técnico

## Tecnologías
- HTML5
- JavaScript
- Node.js para ejecutar las pruebas.

## Componentes
- src/index.html: interfaz del formulario.
- src/script.js: lógica de registro y validación.
- tests/test_validacion.js: pruebas unitarias.

## Función validarTelefono

La función recibe un teléfono y verifica su formato mediante una expresión regular.

Código:

function validarTelefono(tel) {
    return /^[0-9]+$/.test(tel);
}

La expresión regular utiliza:
- ^: indica el inicio del texto.
- [0-9]: permite únicamente dígitos.
- +: exige uno o más dígitos.
- $: indica el final del texto.
- test(): devuelve true si el valor cumple la expresión.

La función rechaza letras, espacios, guiones y valores vacíos.

## Cambio realizado
La validación fue incorporada en la versión 1.1 para resolver el ticket #101.
