<img width="682" height="439" alt="Arquitectura drawio (2)" src="https://github.com/user-attachments/assets/73c91109-e691-4dbc-851e-e1c35fd7760e" />

# Justificación estilo arquitectónico 
Elegimos el estilo REST/SOA porque la esencia de nuestro sistema es la interoperabilidad. Al ser una herramienta que depende de datos externos (pedidos y stock del supermercado), necesitamos una arquitectura basada en servicios que nos permita consumir y exponer información de manera estandarizada. Este estilo facilita la integración con el sistema del supermercado y permite que la aplicación del picker sea ligera, escalable y se comunique con el servidor de forma eficiente. Al elegir un estilo REST/SOA, sacrificamos autonomia de datos, ya que el sistema depende de la disponibilidad de las APIs del supermercado para funcionar.


# Descomposición de Módulos (Estilo REST/SOA)
Para Zurtia, los módulos se dividen según su función dentro del flujo de picking y la comunicación con el supermercado:

1. Capa de Presentación (Frontend Mobile): 
-Módulo de Interfaz de Usuario (UI): Gestiona las pantallas de la App (Figma), los temas visuales y la respuesta táctil.
-Módulo de Gestión de Estado local: Controla el contador de productos (26/42) y los datos temporales del pedido actual para que la app sea fluida.
-Módulo de Escaneo: Integración nativa con la cámara/sensor para la captura de códigos de barras.

2. Capa de Servicios de Aplicación (Backend Node.js - REST API)
Módulo de Autenticación y Autorización: Encargado de la validación de credenciales y generación de tokens JWT (permite el acceso con Gmail o cuentas institucionales).

Módulo de Gestión de Pedidos: Contiene la lógica de negocio; asigna pedidos a los pickers y gestiona el flujo de estados (Pendiente, En Proceso, Finalizado).

Módulo de Notificaciones: Gestiona las alertas de nuevos pedidos y los avisos de quiebre de stock al gerente/repositor.

3. Capa de Interoperabilidad (SOA - Service Oriented Architecture)
Adaptador de Inventario Legado (Legacy Adapter): Es el "traductor" que se conecta con los sistemas antiguos del supermercado para consultar stock real y ubicaciones de pasillos.

Módulo de Integración de Precios: Servicio específico que recupera el valor unitario y total, incluyendo ofertas vigentes.

4. Capa de Datos y Persistencia
Módulo de Base de Datos Central: Almacena perfiles de usuarios, historial de pedidos, logs de rendimiento y las fotos de respaldo de seguridad.

Módulo de Caché de Imágenes: Optimiza la entrega de miniaturas de productos (mazapanes, aceites, etc.) para no saturar la red del supermercado.

Justificación de la Coherencia Arquitectónica
Al igual que en el ejemplo de tus compañeros, esta estructura es coherente porque:

Independencia de Módulos: Si el sistema de precios del supermercado cambia, solo necesitas modificar el Módulo de Integración de Precios, sin tocar la App móvil ni el sistema de login.

Escalabilidad: Al ser REST, puedes tener a 100 pickers conectados simultáneamente, ya que cada petición es independiente y segura gracias al JWT.

Resiliencia: El Módulo de Gestión de Estado local en la App permite que, si el servidor falla por un momento, el picker no pierda lo que ya escaneó.

