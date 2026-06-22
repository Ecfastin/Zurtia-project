# Casos de Prueba — Zurtia

---

## Prueba API-Login (`POST /login`)

| ID | Nombre | Método | Body | Salida esperada |
|----|--------|--------|------|-----------------|
| HU14-01 | Login exitoso picker | POST | `{"correo":"picker@zurtia.cl","password":"1234"}` | HTTP 200 — `{ "mensaje": "Login exitoso", usuario: {...} }` |
| HU14-02 | Login exitoso supervisor | POST | `{"correo":"supervisor@zurtia.cl","password":"abcd"}` | HTTP 200 — `{ "mensaje": "Login exitoso", usuario: {...} }` |
| HU14-03 | Contraseña incorrecta | POST | `{"correo":"picker@zurtia.cl","password":"wrong"}` | HTTP 401 — `{ "error": "Contraseña incorrecta" }` |
| HU14-04 | Correo no registrado | POST | `{"correo":"noexiste@zurtia.cl","password":"1234"}` | HTTP 401 — `{ "error": "Correo no registrado" }` |
| HU14-05 | Falta password | POST | `{"correo":"picker@zurtia.cl"}` | HTTP 400 — `{ "error": "Correo y contraseña son requeridos" }` |
| HU14-06 | Falta correo | POST | `{"password":"1234"}` | HTTP 400 — `{ "error": "Correo y contraseña son requeridos" }` |
| HU14-07 | Body vacío | POST | `{}` | HTTP 400 — `{ "error": "Correo y contraseña son requeridos" }` |
| HU14-08 | Password vacío | POST | `{"correo":"picker@zurtia.cl","password":""}` | HTTP 400 — `{ "error": "Correo y contraseña son requeridos" }` |
| HU14-09 | Correo vacío | POST | `{"correo":"","password":"1234"}` | HTTP 400 — `{ "error": "Correo y contraseña son requeridos" }` |
| HU14-10 | Correo formato inválido | POST | `{"correo":"noesuncorreo","password":"1234"}` | HTTP 401 — `{ "error": "Correo no registrado" }` |

---

## Prueba API-Productos (`GET /productos`)

| ID | Nombre | Método | Verificación | Salida esperada |
|----|--------|--------|--------------|-----------------|
| HU08-01 | Listar todos los productos | GET | Respuesta general | HTTP 200 — Array con todos los productos |
| HU08-02 | Verificar orden categorías — Secos primero | GET | Primer elemento es categoría "Secos" | HTTP 200 — `productos[0].categoria === "Secos"` |
| HU08-03 | Verificar Congelados al final | GET | Último elemento es categoría "Congelados" | HTTP 200 — Último producto con `categoria === "Congelados"` |
| HU08-04 | Verificar pasillo descendente en Secos | GET | Productos Secos ordenados por pasillo DESC | HTTP 200 — Pasillos en orden descendente dentro de Secos |
| HU08-05 | Verificar campo pasillo presente | GET | Todos los productos tienen `pasillo` | HTTP 200 — Todos los objetos incluyen campo `pasillo` |
| HU08-06 | Verificar campo góndola presente | GET | Todos los productos tienen `gondola` | HTTP 200 — Todos los objetos incluyen campo `gondola` |
| HU08-07 | Verificar campo imagen_url presente | GET | Todos los productos tienen `imagen_url` | HTTP 200 — Todos los objetos incluyen campo `imagen_url` |
| HU08-08 | Verificar campo categoría presente | GET | Todos los productos tienen `categoria` | HTTP 200 — Todos los objetos incluyen campo `categoria` |
| HU08-09 | Verificar retorna status 200 | GET | Código HTTP correcto | HTTP 200 |
| HU08-10 | Verificar góndola ascendente mismo pasillo | GET | Productos del mismo pasillo ordenados por góndola ASC | HTTP 200 — Góndolas en orden ascendente dentro del mismo pasillo |
