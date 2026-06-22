# Especificación de Historias de Usuario — Zurtia

---

## HU14 — Login del Picker

**Como** picker,  
**quiero** iniciar sesión con mi correo electrónico personal,  
**para** acceder de forma sencilla y segura a mi panel de tareas.

### Criterios de Aceptación

| # | Dado que... | Cuando... | Entonces... |
|---|-------------|-----------|-------------|
| 1 | El picker tiene una cuenta registrada | Ingresa su correo y contraseña correctos vía `POST /login` | El sistema responde con HTTP 200 y retorna los datos del usuario (id, nombre, correo, rol) |
| 2 | El picker ingresa un correo no registrado | Envía la solicitud de login | El sistema responde con HTTP 401 y el mensaje "Correo no registrado" |
| 3 | El picker ingresa una contraseña incorrecta | Envía la solicitud de login | El sistema responde con HTTP 401 y el mensaje "Contraseña incorrecta" |
| 4 | El picker omite el correo o la contraseña | Envía la solicitud de login | El sistema responde con HTTP 400 y el mensaje "Correo y contraseña son requeridos" |

### Definition of Done

- [x] Endpoint `POST /login` implementado y funcional
- [x] Validaciones de campos vacíos implementadas
- [x] Respuestas de error con códigos HTTP correctos
- [x] Documentación Swagger disponible en `/docs`
- [x] Pruebas realizadas con Thunder Client (`thunder-tests-hu14.json`)
- [x] Código integrado a la rama `main` via Pull Request

---

## HU8 — Lista de Productos con Ubicación

**Como** picker,  
**quiero** que la lista de productos incluya la ubicación exacta (pasillos y góndola) de cada artículo,  
**para** optimizar mi recorrido en el supermercado.

### Criterios de Aceptación

| # | Dado que... | Cuando... | Entonces... |
|---|-------------|-----------|-------------|
| 1 | Existen productos registrados en el sistema | El picker hace `GET /productos` | El sistema responde con HTTP 200 y una lista de productos con id, nombre, categoría, pasillo, góndola e imagen_url |
| 2 | Los productos están ordenados para optimizar el recorrido | El picker recibe la lista | Los productos están ordenados por categoría (Secos → Frutas y Verduras → Refrigerados → Congelados) y luego por pasillo y góndola |
| 3 | No hay productos en el sistema | El picker hace `GET /productos` | El sistema responde con HTTP 404 y el mensaje "No hay productos disponibles" |

### Definition of Done

- [x] Endpoint `GET /productos` implementado y funcional
- [x] Ordenamiento por categoría y ubicación implementado en la query SQL
- [x] Respuesta incluye campos de ubicación: `pasillo` y `gondola`
- [x] Documentación Swagger disponible en `/docs`
- [x] Pruebas realizadas con Thunder Client (`thunder-tests-hu8.json`)
- [x] Código integrado a la rama `main` via Pull Request
