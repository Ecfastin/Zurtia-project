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



# 🛠️ Tecnologías utilizadas

-> React native


   git clone [https://github.com/Ecfastin/Nuevo_Proyecto.git](https://github.com/Ecfastin/Nuevo_Proyecto.git)

   
---------------------------------------------------------------------------------------------------------------------------------------

# Link [Figma](https://edit-agent-16874125.figma.site)

# Link [Decisión Arquitectónica](DiseñoArquitectonico.md)

# Link [Requisitos Extrafuncionales](RequisitosExtrafuncionales.md)

# 📦 Artefactos del Proyecto

| Artefacto | Archivo |
|------------|------------|
| Diseño Arquitectónico | DiseñoArquitectonico.md |
| Entidades del Dominio | EntidadesDelDominio.md |
| Requisitos Extrafuncionales | RequisitosExtrafuncionales.md |
| Impact Analysis | impact_analysis.md |
| Especificación HU08 | EspecificacionHU08.md |
| Especificación HU14 | EspecificacionHU14.md |
| Deuda Técnica | DeudaTecnica.md |
| Casos de Prueba | README.md |

---

# 🧪 Casos de Prueba

## API Productos (HU08)

**Historia de Usuario:**

Como picker, quiero que la lista de productos incluya la ubicación exacta (pasillos y góndola) de cada artículo para optimizar mi recorrido en el supermercado.

### Casos de prueba

1. Listar todos los productos.
2. Verificar orden de categorías (Secos primero).
3. Verificar Congelados al final.
4. Verificar orden descendente de pasillos.
5. Verificar presencia del campo pasillo.
6. Verificar presencia del campo góndola.
7. Verificar presencia del campo imagen_url.
8. Verificar presencia del campo categoría.
9. Verificar respuesta HTTP 200.
10. Verificar orden ascendente de góndolas en mismo pasillo.

---

## API Login (HU14)

**Historia de Usuario:**

Como picker, quiero iniciar sesión con mi correo electrónico personal para acceder de forma sencilla y segura a mi panel de tareas.

### Casos de prueba

1. Login exitoso picker.
2. Login exitoso supervisor.
3. Contraseña incorrecta.
4. Correo no registrado.
5. Falta contraseña.
6. Falta correo.
7. Body vacío.
8. Contraseña vacía.
9. Correo vacío.
10. Formato de correo inválido.

---

## 🧪 Casos de Prueba API-Productos (HU08)

- [HU08-01 Listar todos los productos](#hu08-01-listar-todos-los-productos)
- [HU08-02 Secos primero](#hu08-02-verificar-orden-categorías-secos-primero)
- [HU08-03 Congelados al final](#hu08-03-verificar-congelados-al-final)
- [HU08-04 Pasillo descendente en Secos](#hu08-04-verificar-pasillo-descendente-en-secos)
- [HU08-05 Campo pasillo](#hu08-05-verificar-campo-pasillo-presente)
- [HU08-06 Campo góndola](#hu08-06-verificar-campo-góndola-presente)
- [HU08-07 Campo imagen_url](#hu08-07-verificar-campo-imagen-url-presente)
- [HU08-08 Campo categoría](#hu08-08-verificar-campo-categoría-presente)
- [HU08-09 Status 200](#hu08-09-verificar-retorna-status-200)
- [HU08-10 Góndola ascendente](#hu08-10-verificar-góndola-ascendente-mismo-pasillo)

---

## HU08-01 Listar todos los productos
Se obtiene correctamente el listado completo de productos con su información de ubicación.
**Resultado esperado:** HTTP 200 — Array con todos los productos

---

## HU08-02 Verificar orden categorías — Secos primero
Se valida que la categoría "Secos" aparece primero en la lista de productos.
**Resultado esperado:** HTTP 200 — productos[0].categoria === "Secos"

---

## HU08-03 Verificar Congelados al final
Se valida que los productos "Congelados" aparecen al final de la lista.
**Resultado esperado:** HTTP 200 — Último producto con categoria === "Congelados"

---

## HU08-04 Verificar pasillo descendente en Secos
Se valida que los productos de categoría "Secos" estén ordenados por pasillo en orden descendente.
**Resultado esperado:** HTTP 200 — Pasillos en orden descendente dentro de Secos

---

## HU08-05 Verificar campo pasillo presente
Se valida que todos los productos incluyen el campo pasillo.
**Resultado esperado:** HTTP 200 — Todos los objetos incluyen campo pasillo

---

## HU08-06 Verificar campo góndola presente
Se valida que todos los productos incluyen el campo góndola.
**Resultado esperado:** HTTP 200 — Todos los objetos incluyen campo gondola

---

## HU08-07 Verificar campo imagen_url presente
Se valida que todos los productos incluyen el campo imagen_url.
**Resultado esperado:** HTTP 200 — Todos los objetos incluyen campo imagen_url

---

## HU08-08 Verificar campo categoría presente
Se valida que todos los productos incluyen el campo categoría.
**Resultado esperado:** HTTP 200 — Todos los objetos incluyen campo categoria

---

## HU08-09 Verificar retorna status 200
Se valida que la API responde correctamente.
**Resultado esperado:** HTTP 200

---

## HU08-10 Verificar góndola ascendente mismo pasillo
Se valida que dentro del mismo pasillo los productos se ordenan por góndola en forma ascendente.
**Resultado esperado:** HTTP 200 — Góndolas en orden ascendente dentro del mismo pasillo

## 🧪 Casos de Prueba API-Login (HU14)

- [HU14-01 Login exitoso picker](#hu14-01-login-exitoso-picker)
- [HU14-02 Login exitoso supervisor](#hu14-02-login-exitoso-supervisor)
- [HU14-03 Contraseña incorrecta](#hu14-03-contraseña-incorrecta)
- [HU14-04 Correo no registrado](#hu14-04-correo-no-registrado)
- [HU14-05 Falta password](#hu14-05-falta-password)
- [HU14-06 Falta correo](#hu14-06-falta-correo)
- [HU14-07 Body vacío](#hu14-07-body-vacío)
- [HU14-08 Password vacío](#hu14-08-password-vacío)
- [HU14-09 Correo vacío](#hu14-09-correo-vacío)
- [HU14-10 Correo formato inválido](#hu14-10-correo-formato-inválido)

---

## HU14-01 Login exitoso picker
El usuario picker ingresa correctamente al sistema con credenciales válidas y recibe un token de autenticación.
**Resultado esperado:** HTTP 200 — Login exitoso

---

## HU14-02 Login exitoso supervisor
El usuario supervisor ingresa correctamente al sistema con credenciales válidas y recibe un token de autenticación.
**Resultado esperado:** HTTP 200 — Login exitoso

---

## HU14-03 Contraseña incorrecta
El sistema rechaza el acceso cuando la contraseña no coincide con el usuario registrado.
**Resultado esperado:** HTTP 401 — Contraseña incorrecta

---

## HU14-04 Correo no registrado
El sistema rechaza el login cuando el correo no existe en la base de datos.
**Resultado esperado:** HTTP 401 — Correo no registrado

---

## HU14-05 Falta password
El sistema detecta que falta el campo password en la solicitud.
**Resultado esperado:** HTTP 400 — Campos requeridos

---

## HU14-06 Falta correo
El sistema detecta que falta el campo correo en la solicitud.
**Resultado esperado:** HTTP 400 — Campos requeridos

---

## HU14-07 Body vacío
El sistema rechaza la solicitud por no enviar datos.
**Resultado esperado:** HTTP 400 — Campos requeridos

---

## HU14-08 Password vacío
El sistema detecta password vacío y rechaza el login.
**Resultado esperado:** HTTP 400 — Campos requeridos

---

## HU14-09 Correo vacío
El sistema detecta correo vacío y rechaza el login.
**Resultado esperado:** HTTP 400 — Campos requeridos

---

## HU14-10 Correo formato inválido
El sistema rechaza el correo porque no cumple formato válido.
**Resultado esperado:** HTTP 401 — Correo no registrado

# Link [EntidadesDelDominio](EntidadesDelDominio.md)

