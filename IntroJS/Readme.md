# Historia JavaScript

El primer sitio web de Internet, desarrollada en 1992 por <i>[Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/)</i> que aún <b>se enuentra en activo</b> tenía este aspecto,

![App Screenshot](https://github.com/LokeshPereiro/JavaScript-Pro/blob/main/IntroJS/assets/imgs/FirstWeb.png?raw=true)

Para obtener más información acerca de los inicios de la web, visitar este link: http://info.cern.ch/

<h2>¿Por qué surgió JavaScript?</h2>
Pues resulta que a inicios de los años 90, la velocidad máxima de los módems era de 28 kbps, es decir, 28 kilobytes, lo permitió que pudiéramos crear sitios web "mas bonitos", construir aplicaciones web más complejas, enviar formularios más robustos, etc. Con el incremento de la complejidad de las páginas web y un Internet tan lento surgió la necesidad de que hubiese un lenguaje de programación que se ejecutará del lado del cliente. <hr/>
<h4>¿Cómo funcionaba una web en los años 90?</h4>

```

1. Accedo a una web desde mi PC. Pues esta acción se traduce en una petición HTTP a un servidor (que esté hosteando esa dirección web).

2. Relleno, por ejemplo, un formulario de registro. Después de haber enviado el formulario con los datos, me doy cuenta de que se me olvido poner mi appellido pues, el servidor se da cuenta de ello y me vuelve a enviar el formulario solicidando el campo requerido..

3. Cada acción errónea del cliente se convertía en una petición HTTP innecesaria al servidor (que era incargado de validar la entrada de los datos, validarlos y las peticiones varias).
```

Consciente de ello, <b>[Brendan Eich](https://es.wikipedia.org/wiki/Brendan_Eich)</b> junto con la companía Netscape crearon JS que funcionaba del lado del cliente permitiendo enviar informaciones lo más procesado posible al servidor para que éste sólo se encarge de trabajar con los datos validados y que sea la propia interfaz quien "tenga que interactuar con el cliente/usuario" dando la mejor experiencia posible.

<p>La primera versión de JS se llamaba <b>"LiveScript"</b> pero con fines de marketing decidieron llamarla JavaScript (porque Java estaba de moda en aquellos años y era un lenguaje de programación muy popular). De hecho, Microsoft al ver que ellos también tenían el problema de la realción cliente-servidor, copiaron a JavaScript y le pusieron de nombre como <i>JScript</i>
<b>Netscape</b> en vez de entrar en guerras tecnológicas decidió estandarizar el lenguaje y se envió las especificaciones de JavaScript 1.1 a ECMA (European Computer Manufactures Association) en 1997.
</p>

## JavaScript Milestones

| Year | Milestone                                                            |
| ---- | -------------------------------------------------------------------- |
| 1996 | LiveScript was born                                                  |
| 1997 | JavaScript name adopted & First ECMA Script 1.1 come into action ES1 |
| 2009 | ES5 (ECMA Script 5) hits the market with lots of new characteristics |
| 2015 | Lastest big updates ES6/ES2015                                       |

<h4>¿Qué diferencias hay entre la versión 5 y 6?</h4>

\*\*ES5: El código escrito con la versión 5, solo sirve para navegadores antiguos, los más modernos no los soportan.

\*\*ES6: Con la aparición de los "Polyfills" con la versión ES6 podemos ejecutar el JavaScript moderno en los navegadores viejos sin problema.
