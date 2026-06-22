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

# Link [EntidadesDelDominio](EntidadesDelDominio.md)

