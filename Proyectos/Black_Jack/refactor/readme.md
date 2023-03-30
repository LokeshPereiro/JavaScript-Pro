# Puntos de mejora de nuestra app:

- Todo mi código está en el objeto global windows, por lo que, una persona que sepa un poco de programación podría inspeccionar el DOM y leer las cartas de la baraja sin ningún problema
- Nos podrían duplicar las funciones y/o ciertas acciones predefinidas

## Primeras implementaciones de seguridad

- <b>Patrón módulo</b> : Es el patrón de diseño más común que exite en JavaScript pues, es comptible con casi todas las versiones que posteriores a ES5. Además nos permite una encapsulación de nuestro código (nadie de exterior puede cambiarnos las variables o las funciones a su antojo).

```javascript
// # Función Autoinvocada
(() => {
  "use strict"; // Modo estricto para evitar futuros errores
})();
```

- Minimizar el código de forma manual

- Optimizaciones y protección de código
