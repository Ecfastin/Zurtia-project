# 🛒 Zurtia 🛒

-> Un sistema de Pickeo para todas las empresas de supermercados.

### 👥 Integrantes del proyecto

| Nombre | Rol | Responsabilidades principales |
| :--- | :--- | :--- |
| **Ariadna Espejo Torres** | Product Owner | Historias de Usuario, Archivo Arquitectura |
| **Benjamin Figueroa Matamala** | Scrum Master | Entidades del Dominio, DiseñoArquitectonico.md |
| **Cristofer Riveros Gapuz** | Developer | Mockups, prompts |
| **Ignacio Cortés Catrín** | Developer | Mockups, prompts |
| **Patricio Rivadeneira Alfaro** | Developer | Requisitos Extrafuncionales |
### Entrega 2
| Nombre              | Rol           | Actividad |
|---------------------|---------------|-----------|
| **Ariadna Espejo Torres**| Product Owner  | 1.1- 3.1 |
|**Benjamin Figueroa Matamala**| Scrum Master |1.1-4.1  |
| **Cristofer Riveros Gapuz**| Developer     |1.1- 2.1  |
| **Ignacio Cortés Catrín**    | Developer     |3.1- 2.1- 1.1  |
| **Patricio Rivadeneira Alfaro** | Developer | 4.1- 2.1- 1.1 |
## 📋 Backlog de Historias de Usuario

| ID | Nombre de la Historia de Usuario | Issue |
| :--- | :--- | :--- |
| **HU1** | Chat multimedia | [#2](https://github.com/Ecfastin/Zurtia-project/issues/8) |
| **HU2** | Cola de asignación automática | [#3](https://github.com/Ecfastin/Zurtia-project/issues/3) |
| **HU3** | Checklist de empaque | [#4](https://github.com/Ecfastin/Zurtia-project/issues/4) |
| **HU4** | Evidencia fotográfica y bultos | [#5](https://github.com/Ecfastin/Zurtia-project/issues/5) |
| **HU5** | Protocolos obligatorios de quiebre | [#6](https://github.com/Ecfastin/Zurtia-project/issues/6) |
| **HU6** | Pasillos y góndola | [#8](https://github.com/Ecfastin/Zurtia-project/issues/8) |
| **HU7** | Tiempo transcurrido | [#9](https://github.com/Ecfastin/Zurtia-project/issues/9) |
| **HU8** | Imagen en miniatura de cada artículo | [#10](https://github.com/Ecfastin/Zurtia-project/issues/10) |
| **HU9** | Vista detallada del producto | [#11](https://github.com/Ecfastin/Zurtia-project/issues/11) |
| **HU10** | Inicio sesión | [#14](https://github.com/Ecfastin/Zurtia-project/issues/14) |

---
# 📝 *Descripción*

Zurita es un Software hecho para cubrir las necesidades de Los principales supermercados a nivel pais para que el proceso de picking sea facil, controlado y eficaz tanto para gerencia, coordinacion y pickers. Zurtia se enriquecio en base a varios problemas a la hora de iniciar, realizar y finalizar pedidos, resultando en la solucion mas conveniente capaz de adaptarse sin dañar el ecosistema propio de las grandes cadenas 😊


# ✨ *Características principales* 
 
-> Optimización de Rutas de Recolección: Algoritmo que organiza los productos por pasillo o categoría para que el trabajador camine lo menos posible.

-> Escaneo y Validación: Soporte para lectura de códigos de barras/QR para asegurar que el producto recolectado es el correcto.

-> Control de Sustituciones: Flujo de trabajo inteligente para manejar productos sin stock, permitiendo ofrecer alternativas al cliente.

-> Dashboard de Rendimiento: Panel administrativo para medir la velocidad de armado de pedidos y eficiencia de los operarios.

# 🚀 Instrucciones de instalación y ejecución

### Requisitos previos
- **Node.js**: v20+ (recomendado LTS)
- **npm**: v10+
- **PostgreSQL**: v15+ (si no usas Docker)
- **Docker & Docker Compose**: (recomendado para desarrollo)

### Variables de entorno
Crea un archivo `.env` en la raíz del proyecto basado en el archivo `.env.example`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_NAME=zurtia_db
PORT=3000
JWT_SECRET=secreto_super_seguro
```

### Instalación y ejecución (con Docker)
Esta es la forma más rápida y recomendada:
1. Asegúrate de tener Docker Desktop corriendo.
2. Ejecuta el siguiente comando en la raíz del proyecto:
   ```bash
   docker-compose up --build
   ```
La aplicación estará disponible en `http://localhost:3000`.

### Instalación y ejecución (sin Docker)
1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Asegúrate de tener una base de datos PostgreSQL corriendo y configurada con las credenciales de tu archivo `.env`.
3. Inicia la aplicación:
   ```bash
   npm start
   ```
La aplicación estará disponible en `http://localhost:3000`.

## 📦 Artefactos del Proyecto

| Artefacto | Archivo |
|------------|------------|
| Diseño Arquitectónico | DiseñoArquitectonico.md |
| Entidades del Dominio | EntidadesDelDominio.md |
| Requisitos Extrafuncionales | RequisitosExtrafuncionales.md |
| Impact Analysis | impact_analysis.md |
| Especificación HU | EspecificacionHU.md |
| Diagrama de despliegue y comp.|<img width="669" height="474" alt="image" src="https://github.com/user-attachments/assets/6809c969-491b-41d3-8ba3-d2a8f765cc64" />|
| Diagrama de componentes  |<img width="718" height="508" alt="image" src="https://github.com/user-attachments/assets/d48a1ef3-f9d4-41ff-a398-4288667d5734" />|
Diagrama de secuencia   | <img width="671" height="295" alt="image" src="https://github.com/user-attachments/assets/65ddbc87-f9a8-4309-9527-96144e428554" />|
| Deuda Técnica | DeudaTecnica.md |
---

# 🧪 Casos de Prueba API-Login (HU14)

| ID | Nombre | Método | URL | Body | Resultado esperado |
|----|--------|--------|-----|------|--------------------|
| HU14-01 | Login exitoso picker | `POST` | `/login` | `{"correo":"picker@zurtia.cl","password":"1234"}` | HTTP 200 — `{"mensaje":"Login exitoso","usuario":{id,nombre,correo,rol}}` |
| HU14-02 | Login exitoso supervisor | `POST` | `/login` | `{"correo":"supervisor@zurtia.cl","password":"abcd"}` | HTTP 200 — `{"mensaje":"Login exitoso","usuario":{id,nombre,correo,rol}}` |
| HU14-03 | Contraseña incorrecta | `POST` | `/login` | `{"correo":"picker@zurtia.cl","password":"wrong"}` | HTTP 401 — `{"error":"Contraseña incorrecta"}` |
| HU14-04 | Correo no registrado | `POST` | `/login` | `{"correo":"noexiste@zurtia.cl","password":"1234"}` | HTTP 401 — `{"error":"Correo no registrado"}` |
| HU14-05 | Falta password | `POST` | `/login` | `{"correo":"picker@zurtia.cl"}` | HTTP 400 — `{"error":"Correo y contraseña son requeridos"}` |
| HU14-06 | Falta correo | `POST` | `/login` | `{"password":"1234"}` | HTTP 400 — `{"error":"Correo y contraseña son requeridos"}` |
| HU14-07 | Body vacío | `POST` | `/login` | `{}` | HTTP 400 — `{"error":"Correo y contraseña son requeridos"}` |
| HU14-08 | Password vacío | `POST` | `/login` | `{"correo":"picker@zurtia.cl","password":""}` | HTTP 400 — `{"error":"Correo y contraseña son requeridos"}` |
| HU14-09 | Correo vacío | `POST` | `/login` | `{"correo":"","password":"1234"}` | HTTP 400 — `{"error":"Correo y contraseña son requeridos"}` |
| HU14-10 | Correo formato inválido | `POST` | `/login` | `{"correo":"noesuncorreo","password":"1234"}` | HTTP 401 — `{"error":"Correo no registrado"}` |

---

# 🧪 Casos de Prueba API-Productos (HU08)

| ID | Nombre | Método | URL | Body | Resultado esperado |
|----|--------|--------|-----|------|--------------------|
| HU08-01 | Listar todos los productos | `GET` | `/productos` | ninguno | HTTP 200 — Array con todos los productos |
| HU08-02 | Verificar orden — Secos primero | `GET` | `/productos` | ninguno | HTTP 200 — `productos[0].categoria === "Secos"` |
| HU08-03 | Verificar Congelados al final | `GET` | `/productos` | ninguno | HTTP 200 — Último producto con `categoria === "Congelados"` |
| HU08-04 | Pasillo descendente en Secos | `GET` | `/productos` | ninguno | HTTP 200 — Productos Secos ordenados por `pasillo` DESC |
| HU08-05 | Campo pasillo presente | `GET` | `/productos` | ninguno | HTTP 200 — Todos los productos incluyen campo `pasillo` |
| HU08-06 | Campo góndola presente | `GET` | `/productos` | ninguno | HTTP 200 — Todos los productos incluyen campo `gondola` |
| HU08-07 | Campo imagen_url presente | `GET` | `/productos` | ninguno | HTTP 200 — Todos los productos incluyen campo `imagen_url` |
| HU08-08 | Campo categoría presente | `GET` | `/productos` | ninguno | HTTP 200 — Todos los productos incluyen campo `categoria` |
| HU08-09 | Verificar status 200 | `GET` | `/productos` | ninguno | HTTP 200 |
| HU08-10 | Góndola ascendente mismo pasillo | `GET` | `/productos` | ninguno | HTTP 200 — Productos del mismo pasillo ordenados por `gondola` ASC |
---

## 📐 Modelado de análisis (5.3)

### Modelo de dominio del sistema de pickeo

### Casos de uso:
- Picker
- Sistema de asignación
- Administrador

### Flujo principal:
- Asignación automática de pedidos

---

## 🎨 Modelado de diseño (5.4)

### Arquitectura en capas:
- Routes
- Controllers
- Services
- Repository

### Flujo del sistema:
- Cola de asignación de pickers

### Modelo entidad-relación:
- Picker
- Pedido
- Cola de asignación

---

## 🚀 Historia de Usuario implementada

### HU2 - Cola de asignación automática de pedidos

---

### 📌 Descripción

Como picker, quiero entrar a una cola de asignación automática de pedidos, para recibir pedidos de forma ordenada y eficiente según mi disponibilidad.

---

### ⚙️ Funcionalidad implementada

- El picker puede ingresar a la cola de asignación
- El sistema valida disponibilidad del usuario
- El picker entra en una cola FIFO
- El sistema asigna pedidos automáticamente según orden de llegada

---

# 🌿 Git Workflow

- feature-hu08
- feature-hu14
- Pull Requests hacia main

---
