## 1. Cambio solicitado 

Cambio funcional
Se requiere que el módulo de chat soporte carga pico de 5.000 conversaciones simultáneas durante peaks de despacho, con mensajería en tiempo real y sin degradación perceptible.

Cambio no funcional
Cada servicio debe poder desplegarse, escalarse y actualizarse de forma totalmente independiente, con contratos de interfaz versionados y sin coordinación de releases entre equipos.
 
## 2. Nuevas historias de usuario 

### US-01: [Como gerente quiero que haya más pedidos activos simultáneamente.]
Criterios de aceptación.
Dado que hay mas pickers trabajando, cuando hay mucha demanda de pedidos existe un cuello de botella que no permite trabajar a todos, por lo que necesito que se pueda llegar hasta 5000 pedidos simultáneamente.
 
### US-02: [Como picker no quiero que haya degradación perceptible en el sistema de mensajería.]
Criterio de aceptación.
Dado que estoy en mensajería con el cliente, necesito que el sistema vaya lo mas fluido posible a la hora de estar haciendo el pedido, entonces esto me permitiría poder completar el pedido de una manera mucho más eficaz y rápida.


## 3. Impacto en requisitos extrafuncionales 
 
Indicar si el cambio altera la prioridad de algún REF o introduce nuevos. 
Trazar cambios de prioridad que motiven cambios en decisiones de arquitectura. 
 
| REF ID | Descripción                    | Prioridad anterior | Prioridad nueva | Cambio / Motivo       	| 
|--------|--------------------------------|--------------------|-----------------|---------------------------| 
| REF- 09|   Escalabilidad       | Medio  | Alta   | Soporte para 5000 pickers y chat simultáneo | 
| REF-12  |  Almacenamiento nuevo  | Alta     |   Alta  | Almacenamiento en la nube temporal | 
| REF-01 | [nuevo REF derivado del cambio]| —                  | Alta        	| Nuevo requisito       	| 
 
## 4. Impacto en entidades del dominio 
[Nuevas entidades, atributos o relaciones afectadas] + Diagrama acutalizado 
 
## 5. Impacto en mockups 

El mockups seguiría siendo los mismos, dado que no hay cambios presentes en el Frontend del Software.
El módulo de la API es lo que debe de cambiar. 
Este dicho cambio está presente en el mismo módulo de la API no afectando al módulo del Frontend.
Por lo que concluimos que no debería haber ningún cambio en mockups.
 

## 6. Impacto en arquitectura 
<img width="552" height="421" alt="Captura de pantalla 2026-04-21 140209" src="https://github.com/user-attachments/assets/f7348d72-0ec4-4fe1-aadf-0ca6230a788b" />


### 6.1 ¿Cambia el estilo arquitectónico? 
[Sí] — Justificación: 
[Si la repriorización de REF obliga a cambiar el estilo, esto se debe a que nuestra arquitectura ha agregado un módulo de microservicios, tomando una parte funcional de esta modificado el módulo de la API, siendo el chat, para que está funcione como un microservicio con propiedades propias escalables a 5.000 requerimientos en simultáneo. transformándolo en un mix de arquitectura SOA con microservicios.]

 
### 6.2 Relación REF (repriorizado) con decisiones de arquitectura 
 
| REF ID | Prioridad nueva | Decisión de arquitectura que lo aborda     	| 
|--------|-----------------|------------------------------------------------| 
| REF-09 | Alta        	|  Adaptarlo a 5000 pickers simultáneos| 
| REF-12 | Alta        	| Tener un microservicio en la nube temporal    	| 

 




m## 7. Impacto en módulos 
 
| Módulo             | Tipo de impacto	| Responsabilidad actualizada    	| Ofrece a otros (actualizado)   | 
|--------------------|--------------------|------------------------------------|--------------------------------| 

| [Módulo API central] | MODIFICADO | [Este módulo lo que hace en el sistema es, darle una prioridad Extra a la interfaz cliente usuario ]      	| [interface Ciente Picker]  | 

| [Módulo Chat] | NUEVO | [La escalabilidad de Chats] | 
[Una mayor cantidad de Chats simultáneamente entre Clientes y Pickers] | 
 
Fundamentación de cambios modulares: 
[Justificar por qué se agregan, modifican o eliminan módulos en función del 
cambio de requerimientos y/o la repriorización de REF.] 
 
## 8. Nuevas decisiones de diseño 
 
### Decisión 1 
- Decisión: [Se decidió una modificación arquitectónica] 
- Motivación: [Una mayor cantidad de Chats simultáneamente, y la motivación es debido a que el diseño actual no soporta los 5000 pickers simultáneos] 
- Alternativas consideradas: [Microservicios] 
- Impacto: [Afecta al módulo de la API] 
 
## 9. Trazabilidad actualizada 
 
| Historia | REF relacionado | Módulo 	| Mockup  | 
|----------|-----------------|------------|---------| 
| US-01	| REF-09     	| [Chat]   | [Los mismos]   | 
| US-02	| REF-01     	| [API central]   | [Los mismos]   | 
 
## 10. Justificación global y trade-offs 
[Añadimos eficacia, añadimos complejidad]
