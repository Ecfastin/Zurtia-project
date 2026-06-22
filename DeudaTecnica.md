# Deuda Técnica — Zurtia

---

## Code Smells Identificados

### 1. Rutas de dominio incorrecto (`/cursos`)
**Archivo:** `index.js`  
**Descripción:** El archivo principal contiene endpoints CRUD para `/cursos` (GET, POST, PUT, DELETE) que no tienen relación con el dominio del sistema de pickeo. Estas rutas son remanentes de un proyecto anterior y representan código muerto en la aplicación.  
**Impacto:** Confusión para nuevos desarrolladores, superficie de ataque innecesaria, contaminación de la documentación Swagger.  
**Solución:** Eliminar las rutas `/cursos` y sus referencias en la base de datos.

---

### 2. Contraseñas almacenadas en texto plano
**Archivo:** `index.js` — endpoint `POST /login`  
**Descripción:** La comparación de contraseñas se realiza directamente contra el valor almacenado en la base de datos sin ningún tipo de hash (`usuario.password !== password`). Esto implica que las contraseñas están guardadas en texto plano.  
**Impacto:** Vulnerabilidad de seguridad crítica. Si la base de datos es expuesta, todas las contraseñas quedan comprometidas.  
**Solución:** Implementar hashing con `bcrypt` para almacenar y comparar contraseñas.

---

### 3. Sin autenticación ni autorización (JWT ausente)
**Archivo:** `index.js`  
**Descripción:** El endpoint de login retorna los datos del usuario pero no genera ningún token de sesión (JWT u otro). Los demás endpoints (`GET /productos`) son completamente públicos y accesibles sin autenticación.  
**Impacto:** Cualquier persona puede consultar la lista de productos sin estar autenticada. No existe control de roles (picker, coordinador, gerencia).  
**Solución:** Implementar JWT en el login y proteger los endpoints con middleware de autenticación.

---

### 4. Sin validación de datos de entrada
**Archivo:** `index.js` — endpoints de `/cursos` y `/productos`  
**Descripción:** No se valida el formato o tipo de los datos recibidos en el body. Por ejemplo, en `POST /cursos` no se verifica que `creditos` sea un número o que los campos no estén vacíos.  
**Impacto:** La base de datos puede recibir datos malformados o incompletos.  
**Solución:** Implementar validación con una librería como `express-validator` o `joi`.

---

### 5. Manejo de errores genérico
**Archivo:** `index.js`  
**Descripción:** No existe un middleware global de manejo de errores. Si ocurre un error inesperado (ej. fallo de base de datos), la aplicación lanza una excepción no controlada y retorna un error 500 sin mensaje descriptivo.  
**Solución:** Agregar middleware de error global con `app.use((err, req, res, next) => {...})`.

---

## Deuda Técnica

| # | Descripción | Prioridad | Esfuerzo estimado |
|---|-------------|-----------|-------------------|
| DT-01 | Eliminar rutas `/cursos` que no pertenecen al dominio | Alta | 30 min |
| DT-02 | Implementar hashing de contraseñas con `bcrypt` | Alta | 2 horas |
| DT-03 | Implementar autenticación con JWT | Alta | 4 horas |
| DT-04 | Agregar validación de inputs con `express-validator` | Media | 2 horas |
| DT-05 | Middleware global de manejo de errores | Media | 1 hora |
| DT-06 | Separar rutas en archivos independientes (Router) | Baja | 2 horas |
| DT-07 | Agregar variables de entorno para credenciales y puerto | Media | 1 hora |
| DT-08 | Implementar logs de acceso y errores | Baja | 2 horas |

---

## Mejoras Futuras

- **Paginación en `GET /productos`:** A medida que crezca el inventario, retornar todos los productos en una sola respuesta puede afectar el rendimiento. Se recomienda implementar paginación.
- **Filtros en `GET /productos`:** Permitir al picker filtrar por categoría, pasillo o nombre para agilizar búsquedas específicas.
- **Refresh tokens:** Ampliar la autenticación con tokens de refresco para mejorar la experiencia del picker sin comprometer la seguridad.
- **Migración a ORM:** Reemplazar las queries SQL directas por un ORM como `Sequelize` o `Prisma` para mejorar mantenibilidad y evitar SQL injection.
- **Dockerización:** Contenerizar la aplicación con Docker para facilitar el despliegue en distintos entornos de supermercados.
