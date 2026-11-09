# Registro de Cambios

## Elementos de Configuración del Software (ECS)

| Código | Elemento | Ubicación |
|---|---|---|
| ECS-01 | Interfaz del sistema | src/index.html |
| ECS-02 | Lógica del sistema | src/script.js |
| ECS-03 | Pruebas | tests/test_validacion.js |
| ECS-04 | README | docs/README.md |
| ECS-05 | Manual de usuario | docs/manual_usuario.md |
| ECS-06 | Manual técnico | docs/manual_tecnico.md |
| ECS-07 | Plan de pruebas | docs/plan_pruebas.md |
| ECS-08 | Registro de cambios | docs/registro_cambios.md |
| ECS-09 | Configuración Git | .gitignore |

## Historial de versiones

| Versión | Fecha | Ticket | Descripción | Responsable |
|---|---|---|---|---|
| v1.0 | 09/11/2026 | - | Versión inicial - Línea base | Alumno |
| v1.1 | 09/11/2026 | #101 | Validación de teléfono | Alumno |

## Resumen del cambio v1.1

Se incorporó la función validarTelefono(tel), que permite aceptar únicamente caracteres numéricos.

Se agregaron pruebas para verificar números válidos, letras, guiones y campos vacíos.

El cambio responde al ticket #101 y fue desarrollado en la rama fix-validacion-telefono.
