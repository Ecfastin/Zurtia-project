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

---

# 🧪 Casos de Prueba API-Productos (HU08)

## HU08-01 Listar productos
Valida que se obtienen todos los productos correctamente.  
**Resultado esperado:** HTTP 200

## HU08-02 Secos primero
Valida que la categoría Secos aparece primero.  
**Resultado esperado:** Secos en primera posición

## HU08-03 Congelados al final
Valida que Congelados aparece al final.  
**Resultado esperado:** Último elemento Congelados

## HU08-04 Pasillo descendente
Valida orden correcto por pasillo en Secos.  
**Resultado esperado:** Orden descendente

## HU08-05 Campo pasillo
Todos los productos incluyen pasillo.

## HU08-06 Campo góndola
Todos los productos incluyen góndola.

## HU08-07 Campo imagen
Todos los productos incluyen imagen_url.

## HU08-08 Campo categoría
Todos los productos incluyen categoría.

## HU08-09 Status 200
Respuesta correcta del servidor.

## HU08-10 Góndola ascendente
Orden correcto dentro del mismo pasillo.

---

# 🧪 Casos de Prueba API-Login (HU14)

## HU14-01 Login exitoso picker
Login correcto con credenciales válidas.  
**Resultado esperado:** HTTP 200

## HU14-02 Login exitoso supervisor
Login correcto supervisor.  
**Resultado esperado:** HTTP 200

## HU14-03 Contraseña incorrecta
Credenciales inválidas.  
**Resultado:** HTTP 401

## HU14-04 Correo no registrado
Usuario no existe.  
**Resultado:** HTTP 401

## HU14-05 Falta password
Falta campo password.  
**Resultado:** HTTP 400

## HU14-06 Falta correo
Falta campo correo.  
**Resultado:** HTTP 400

## HU14-07 Body vacío
Solicitud vacía.  
**Resultado:** HTTP 400

## HU14-08 Password vacío
Password vacío no permitido.  
**Resultado:** HTTP 400

## HU14-09 Correo vacío
Correo vacío no permitido.  
**Resultado:** HTTP 400

## HU14-10 Correo inválido
Formato inválido.  
**Resultado:** HTTP 401

---

# 📐 Modelado de Análisis

- Modelo de dominio → EntidadesDelDominio.md
- Casos de uso → documentados en README
- Especificación HU08 → EspecificacionHU08.md
- Especificación HU14 → EspecificacionHU14.md

---

# 🎨 Modelado de Diseño

- Arquitectura → DiseñoArquitectonico.md
- Componentes → arquitectura del backend y frontend
- Secuencia → flujo login y productos
- Despliegue → sistema cliente-servidor

---

# 🌿 Git Workflow

- feature-hu08
- feature-hu14
- Pull Requests hacia main

---

# ⚙️ Instalación y Ejecución

## Requisitos
- Node.js
- npm

## Instalación
```bash
npm install
