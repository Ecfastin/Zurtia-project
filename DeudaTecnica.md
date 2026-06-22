💥 Deuda Técnica — Zurtia
Code Smells Identificados
1. Rutas de dominio incorrecto (/cursos)

Archivo: index.js

Descripción:
El archivo principal contiene endpoints CRUD para /cursos (GET, POST, PUT, DELETE) que no pertenecen al dominio actual del sistema de pickeo. Estas rutas son remanentes de un proyecto anterior.

Impacto:

Código muerto en la aplicación.
Confusión para nuevos desarrolladores.
Contaminación de la documentación Swagger.

Solución:
Eliminar las rutas /cursos y todas sus referencias.

2. Contraseñas almacenadas en texto plano (CRÍTICO)

Archivo: index.js — POST /login

Descripción:
Las contraseñas se almacenan y comparan directamente sin ningún tipo de hashing (usuario.password !== password).

Impacto:

Vulnerabilidad de seguridad crítica.
Exposición total de credenciales si la base de datos es comprometida.

Solución:
Implementar hashing con bcrypt para almacenar y validar contraseñas.

3. Sin autenticación ni autorización (JWT ausente)

Archivo: index.js

Descripción:
El sistema no implementa tokens de autenticación. Los endpoints como GET /productos son accesibles sin validación.

Impacto:

Acceso no autorizado a datos del sistema.
Falta de control de usuarios y roles.

Solución:
Implementar JWT y middleware de autenticación para proteger rutas.

4. Falta de validación de datos de entrada

Archivo: index.js

Descripción:
No existe validación de los datos recibidos en las solicitudes HTTP.

Impacto:

Inconsistencias en la base de datos.
Posibles errores en la ejecución del sistema.

Solución:
Implementar validación con express-validator o Joi.

5. Manejo de errores no centralizado

Archivo: index.js

Descripción:
No existe un middleware global de manejo de errores.

Impacto:

Difícil diagnóstico de errores.
Respuestas inconsistentes hacia el cliente.

Solución:
Implementar un middleware global de manejo de errores.

6. Arquitectura monolítica en un solo archivo

Archivo: index.js

Descripción:
Toda la lógica del sistema (rutas, lógica de negocio y acceso a datos) está concentrada en un único archivo.

Impacto:

Baja mantenibilidad.
Difícil escalabilidad y testing.

Solución:
Separar la aplicación en capas:

Routes
Controllers
Services
Repository
📊 Tabla de Deuda Técnica
ID	Descripción	Prioridad	Esfuerzo
DT-01	Eliminar rutas /cursos	Alta	30 min
DT-02	Hash de contraseñas con bcrypt	Alta	2h
DT-03	Implementar autenticación con JWT	Alta	4h
DT-04	Validación de inputs	Media	2h
DT-05	Middleware de errores	Media	1h
DT-06	Separar arquitectura en capas	Media	3h
🚀 Mejoras Futuras (Roadmap del Sistema)
📦 Paginación de productos

Implementar paginación en GET /productos para evitar respuestas demasiado grandes cuando el inventario crezca.

🔎 Filtros avanzados

Permitir búsquedas por:

Categoría
Pasillo
Ubicación
Nombre del producto

Esto mejorará la eficiencia del proceso de pickeo.

🔐 Refresh Tokens

Incorporar refresh tokens para mantener sesiones seguras sin necesidad de reautenticación constante.

🧱 Migración a ORM

Reemplazar consultas SQL directas por un ORM como:

Sequelize
Prisma

Beneficios:

Mejor mantenibilidad.
Menos errores en queries.
Mayor productividad.
📦 Dockerización

Contenerizar la aplicación para asegurar consistencia entre entornos de desarrollo, pruebas y producción.
### Dockerización

Contenerizar la aplicación mediante Docker para garantizar consistencia entre entornos de desarrollo, pruebas y despliegue.
