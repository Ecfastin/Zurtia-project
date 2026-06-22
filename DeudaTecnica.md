# Deuda Técnica — Zurtia

## Code Smells Identificados

### 1. Rutas de dominio incorrecto (`/cursos`)

**Archivo:** `index.js`

**Descripción:**
El archivo principal contiene endpoints CRUD para `/cursos` (`GET`, `POST`, `PUT`, `DELETE`) que no tienen relación con el dominio del sistema de pickeo. Estas rutas son remanentes de un proyecto anterior y representan código muerto en la aplicación.

**Impacto:**

* Confusión para nuevos desarrolladores.
* Superficie de ataque innecesaria.
* Contaminación de la documentación Swagger.

**Solución:**
Eliminar las rutas `/cursos` y sus referencias en la base de datos.

---

### 2. Contraseñas almacenadas en texto plano

**Archivo:** `index.js` — endpoint `POST /login`

**Descripción:**
La comparación de contraseñas se realiza directamente contra el valor almacenado en la base de datos sin ningún tipo de hash (`usuario.password !== password`). Esto implica que las contraseñas están guardadas en texto plano.

**Impacto:**

* Vulnerabilidad de seguridad crítica.
* Si la base de datos es expuesta, todas las contraseñas quedan comprometidas.

**Solución:**
Implementar hashing con `bcrypt` para almacenar y comparar contraseñas.

---

### 3. Sin autenticación ni autorización (JWT ausente)

**Archivo:** `index.js`

**Descripción:**
El endpoint de login retorna los datos del usuario pero no genera ningún token de sesión. Los demás endpoints, como `GET /productos`, son accesibles sin autenticación.

**Impacto:**

* Acceso no autorizado a información del sistema.
* Ausencia de control de roles y permisos.

**Solución:**
Implementar JWT en el login y proteger los endpoints mediante middleware de autenticación.

---

### 4. Sin validación de datos de entrada

**Archivo:** `index.js`

**Descripción:**
No se valida el formato ni el tipo de los datos recibidos en las solicitudes HTTP. Esto permite que ingresen datos incompletos o incorrectos al sistema.

**Impacto:**

* Riesgo de inconsistencias en la base de datos.
* Posibles errores durante la ejecución de la aplicación.

**Solución:**
Implementar validación utilizando librerías como `express-validator` o `Joi`.

---

### 5. Manejo de errores genérico

**Archivo:** `index.js`

**Descripción:**
No existe un middleware global de manejo de errores. Los errores inesperados retornan respuestas genéricas sin una gestión centralizada.

**Impacto:**

* Dificultad para diagnosticar problemas.
* Respuestas inconsistentes para el cliente.

**Solución:**
Agregar un middleware global de errores.

---

### 6. Lógica de negocio concentrada en un único archivo

**Archivo:** `index.js`

**Descripción:**
La lógica de negocio, acceso a datos y definición de rutas se encuentran concentradas en un único archivo.

**Impacto:**

* Baja mantenibilidad.
* Dificultad para realizar pruebas.
* Escalabilidad limitada.

**Solución:**
Separar la aplicación en capas (`Routes`, `Controllers`, `Services` y `Repository`).

---

## Deuda Técnica

| ID    | Descripción                                                         | Prioridad | Esfuerzo Estimado |
| ----- | ------------------------------------------------------------------- | --------- | ----------------- |
| DT-01 | Eliminar rutas `/cursos` que no pertenecen al dominio               | Alta      | 30 min            |
| DT-02 | Implementar hashing de contraseñas con bcrypt                       | Alta      | 2 horas           |
| DT-03 | Implementar autenticación con JWT                                   | Alta      | 4 horas           |
| DT-04 | Agregar validación de entradas con express-validator                | Media     | 2 horas           |
| DT-05 | Implementar middleware global de manejo de errores                  | Media     | 1 hora            |
| DT-06 | Separar rutas en archivos independientes                            | Baja      | 2 horas           |
| DT-07 | Agregar variables de entorno para credenciales y puerto             | Alta      | 1 hora            |
| DT-08 | Implementar sistema de logs de acceso y errores                     | Baja      | 2 horas           |
| DT-09 | Aplicar arquitectura por capas (Controllers, Services y Repository) | Media     | 3 horas           |

---

## Mejoras Futuras

### Paginación de Productos

Implementar paginación en `GET /productos` para evitar respuestas excesivamente grandes cuando aumente el inventario.

### Filtros Avanzados

Permitir búsquedas por:

* Categoría
* Pasillo
* Ubicación
* Nombre del producto

Esto mejorará la eficiencia del proceso de pickeo.

### Refresh Tokens

Incorporar refresh tokens para mantener sesiones seguras sin requerir autenticaciones frecuentes.

### Migración a ORM

Reemplazar consultas SQL directas por un ORM como:

* Sequelize
* Prisma

Beneficios:

* Mejor mantenibilidad.
* Menor riesgo de errores en consultas.
* Mayor productividad del equipo.

### Dockerización

Contenerizar la aplicación mediante Docker para garantizar consistencia entre entornos de desarrollo, pruebas y despliegue.
