# Puntos de mejora de nuestra app:

- Todo mi código está en el objeto global windows, por lo que, una persona que sepa un poco de programación podría inspeccionar el DOM y admivinar las cartas de la baraja sin ningún problema
- Nos podrían duplicar las funciones y/o ciertas acciones predefinidas
- Tenemos código repetido con muy pocos cambios...
- Deberiamos hacer pública ciertas funciones de nuestro código, por ejemplo, empezar de nuevo el juego. El evento de reiniciar juego debería ser compartida entre distintos archivos por si fuera necesario por 'x' razones

## Primeras implementaciones de seguridad

- <b>Patrón módulo</b> : Es el patrón de diseño más común que exite en JavaScript:
  - Es comptible con casi todas las versiones de JS posteriores a ES5.
  - Nos permite una encapsular todo el código, con lo cual, no tiene accesso al objeto global, acceder a nuestras funciones ni a las variables predefinidas..

```javascript
// # Función Autoinvocada
(() => {
  "use strict"; // Modo estricto para evitar futuros errores
})();
```

- Minimizar el código de forma manual

- Optimizaciones y protección de código
