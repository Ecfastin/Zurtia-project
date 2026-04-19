<img width="682" height="439" alt="Arquitectura drawio (2)" src="https://github.com/user-attachments/assets/73c91109-e691-4dbc-851e-e1c35fd7760e" />

# Justificación estilo arquitectónico 
Elegimos el estilo REST/SOA porque la esencia de nuestro sistema es la interoperabilidad. Al 
ser una herramienta que depende de datos externos (pedidos y stock del supermercado), 
necesitamos una arquitectura basada en servicios que nos permita consumir y exponer 
información de manera estandarizada. Este estilo facilita la integración con el sistema del 
supermercado y permite que la aplicación del picker sea ligera, escalable y se comunique con 
el servidor de forma eficiente. 
Al elegir un estilo REST/SOA, sacrificamos autonomia de datos, ya que el sistema depende de 
la disponibilidad de las APIs del supermercado para funcionar.
