Especificación de Historias de Usuario — Zurtia

HU2 — Cola de Asignación Automática de Pedidos
Como picker,

quiero entrar a una cola de asignación automática de pedidos,

para recibir pedidos de forma ordenada y eficiente según mi disponibilidad.
Criterios de Aceptación
#Dado que...Cuando...Entonces...1He finalizado mi pedido actualPresiono "Finalizado y seguir activo"El sistema cambia mi estado a "Disponible" y me agrega a la cola de espera para el siguiente pedido2Estoy "Disponible"El sistema me asigna un nuevo pedidoLa app muestra un aviso visible con los datos básicos del pedido y un contador regresivo de 60 segundos para aceptar o rechazar3Recibo el avisoNo acepto o el contador llega a ceroEl sistema me desasigna el pedido, cambia mi estado a "No disponible" y devuelve el pedido a la cola para ser reasignado4Acepto el pedido dentro del tiempo establecidoEl sistema confirma la aceptaciónLa app carga la información del pedido en un máximo de 3 segundos
Definition of Done

 Endpoint de cola de asignación implementado y funcional
 Lógica FIFO implementada para asignación de pedidos
 Estado del picker actualizable (Disponible / No disponible)
 Contador regresivo de 60 segundos implementado
 Reasignación automática ante rechazo o timeout
 Código integrado a la rama main via Pull Request
Has dicho: estas seguro que es asi
- [x] Pruebas realizadas con Thunder Client (`thunder-tests-hu8.json`)
- [x] Código integrado a la rama `main` via Pull Request
