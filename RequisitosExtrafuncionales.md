# Catalogo de Requisitos No Funcionales (ISO 25010)

Este documento detalla los requisitos extrafuncionales del sistema **Zurita (EcFastin)**.

## 1. Requisitos de Calidad de Servicio

| ID | Tipo | Descripcion | Prioridad |
| :--- | :--- | :--- | :--- |
| **REF-01** | Rendimiento | Procesamiento de escaneos en menos de 500ms. | Medio |
| **REF-02** | Seguridad | Acceso mediante tokens JWT con expiracion. | Alta |
| **REF-03** | Disponibilidad | Disponibilidad del 99,5% en horario operativo. | Alta |
| **REF-04** | Mantenibilidad | Estructura modular (Responsabilidad unica). | Alta |
| **REF-05** | Usabilidad | Interfaz para operar con una sola mano. | Medio |
| **REF-06** | Interoperabilidad | Integracion mediante REST estandarizados. | Alta |
| **REF-07** | Recuperabilidad | Retoma estado del pedido en max. 10 seg. | Alta |
| **REF-08** | Testabilidad | Cobertura de pruebas unitarias del 70%. | Alta |
| **REF-09** | Escalabilidad | Soporte para 100 pickers simultaneos. | Medio |
| **REF-10** | Portabilidad | App nativa/hibrida (Android e iOS). | Medio |

---

## 2. Relacion con Decisiones de Arquitectura

| REF ID | Decision de Arquitectura | Impacto en el Sistema |
| :--- | :--- | :--- |
| **REF-01** | Estilo REST | Frontend liviano, reduce latencia. |
| **REF-02** | Auth JWT | Soporta autenticacion stateless. |
| **REF-03** | SOA (Aislamiento) | Fallos en adaptadores no afectan la API. |
| **REF-06** | Adaptador Externo | Encapsula la integracion con terceros. |
| **REF-11** | Cache de Estado | Permite reanudar el picking tras un fallo. |
