### Prueba API-Cola Asignación (POST /cola/estado)

| ID | Nombre | Método | Body | Salida esperada |
| :--- | :--- | :--- | :--- | :--- |
| HU15-01 | Ingreso exitoso a cola | POST | `{"estado":"disponible"}` | HTTP 200 — `{ "mensaje": "Ingresado a la cola exitosamente", "posicion": 1 }` |
| HU15-02 | Salida exitosa de cola | POST | `{"estado":"no_disponible"}` | HTTP 200 — `{ "mensaje": "Removido de la cola exitosamente" }` |
| HU15-03 | Picker ya en cola | POST | `{"estado":"disponible"}` | HTTP 400 — `{ "error": "El picker ya se encuentra en la cola" }` |
| HU15-04 | Estado inválido | POST | `{"estado":"cualquier_cosa"}` | HTTP 400 — `{ "error": "Estado no válido" }` |
| HU15-05 | Falta estado | POST | `{}` | HTTP 400 — `{ "error": "El campo estado es requerido" }` |
| HU15-06 | Picker con pedido activo | POST | `{"estado":"disponible"}` | HTTP 409 — `{ "error": "No puede ingresar a la cola, tiene un pedido en curso" }` |


### Prueba API-Verificar Asignación (GET /cola/asignacion)

| ID | Nombre | Método | Verificación | Salida esperada |
| :--- | :--- | :--- | :--- | :--- |
| HU15-07 | Pedido asignado exitosamente | GET | Retorna el ID del pedido asignado | HTTP 200 — `{ "estado": "asignado", "pedido_id": 1045 }` |
| HU15-08 | Picker sigue en espera | GET | Retorna estado en cola sin pedido | HTTP 200 — `{ "estado": "en_cola", "pedido_id": null }` |
| HU15-09 | Verificar campo pedido_id | GET | La respuesta incluye `pedido_id` | HTTP 200 — El objeto incluye campo `pedido_id` (puede ser null) |
| HU15-10 | Verificar campo estado | GET | La respuesta incluye `estado` | HTTP 200 — El objeto incluye campo `estado` |
| HU15-11 | Picker no está en la cola | GET | Verificar comportamiento fuera de cola | HTTP 404 — `{ "error": "El picker no se encuentra en la cola de asignación" }` |
