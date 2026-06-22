# Especificación de Historias de Usuario — Zurtia

---

## HU2 — Cola de Asignación Automática de Pedidos

Como picker,  
quiero entrar a una cola de asignación automática de pedidos,  
para recibir pedidos de forma ordenada y eficiente según mi disponibilidad.

### Criterios de Aceptación

| # | Dado que... | Cuando... | Entonces... |
|---|---|---|---|
| 1 | He finalizado mi pedido actual | Presiono "Finalizado y seguir activo" | El sistema cambia mi estado a "Disponible" y me agrega a la cola de espera para el siguiente pedido |
| 2 | Estoy "Disponible" | El sistema me asigna un nuevo pedido | La app muestra un aviso visible con los datos básicos del pedido y un contador regresivo de 60 segundos para aceptar o rechazar |
| 3 | Recibo el aviso | No acepto o el contador llega a cero | El sistema me desasigna el pedido, cambia mi estado a "No disponible" y devuelve el pedido a la cola para ser reasignado |
| 4 | Acepto el pedido dentro del tiempo establecido | El sistema confirma la aceptación | La app carga la información del pedido en un máximo de 3 segundos |

### Definition of Done
- [ ] Endpoint de cola de asignación implementado y funcional
- [ ] Lógica FIFO implementada para asignación de pedidos
- [ ] Estado del picker actualizable (Disponible / No disponible)
- [ ] Contador regresivo de 60 segundos implementado
- [ ] Reasignación automática ante rechazo o timeout
- [ ] Código integrado a la rama main via Pull Request
