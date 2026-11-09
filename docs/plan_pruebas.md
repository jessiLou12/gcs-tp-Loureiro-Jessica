# Plan de Pruebas

## Versión 1.1 - Validación de teléfono

| ID | Dato ingresado | Resultado esperado |
|---|---|---|
| P01 | 2804123456 | Aceptado |
| P02 | 123456789 | Aceptado |
| P03 | abc123 | Rechazado |
| P04 | 280-123 | Rechazado |
| P05 | Campo vacío | Rechazado |
| P06 | 280 123 | Rechazado |

## Ejecución
Las pruebas se ejecutan mediante Node.js con el comando:

node tests/test_validacion.js

## Criterio de aceptación
El sistema debe aceptar únicamente teléfonos compuestos por números del 0 al 9.

Todas las pruebas deben finalizar correctamente.
