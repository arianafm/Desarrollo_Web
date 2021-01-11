# Desarrollo_Web
Repositorio creado para el Curso Profesional de Desarrollo Web

# Introducción #

 ## Introducción al curso Desarrollo Web ##
 
Veremos cómo crear páginas Web, desde cómo subir tu CV hasta algo más complejo como el sitio completo de un negocio.

## Conocimientos previos ##

Algunas cosas ideales pero no necesarias para tomar el curso, son las siguientes:  
* Fundamentos de programación
* Habilidad para poder instalar programas y hacer algunas configuraciones

## Acerca del proyecto del curso ##

A lo largo del curso haremos los siguientes proyectos:
* Página con CV
* Portal con boletines
* Sitio Web para un negocio

# Conceptos Fundamentales #

## Componentes de una página web ##

Una página web está compuesta de distintos elementos:
* HTML  
Elemento _obligatorio_.  
Este documento define la estructura de nuestro sitio y cuáles serán los otros elementos que formarán parte del sitio mismo.  
A través de HTML podemos importar componentes como imágenes, documentos que definen cómo se ve y se comporta un sitio web (i.e., CSS, JS), entre otros.
* CSS  
Elemento _no obligatorio_. 
CSS nos permitirá definir las propiedades que dictarán cómo se verá nuestro sitio web y en versiones más nuevas como se animan, mueven e interactuan con el usuario.
* JavaScript  
Elemento _no obligatorio_.  
Los documentos JS contienen instrucciones en código que definen cómo interactua el sitio web con el usuario de manera dinámica.
* Assets  
Elemento _no obligatorio_.  
Los Assets contienen a las imágenes, archivos de fuentes, videos, audios y más.

## ¿Cómo funciona el internet? ##

La Web funciona bajo un concepto al que llamamos cliente y servidor.  

Este concepto se usa para todos aquellos programas que funcionan con una máquina principal que contiene la información, el código o los recursos que queremos y uno o más clientes que se conectan a la máquina principal para acceder a estos elementos.  
En la Web los clientes son todos los dispositivos que usamos para navegar por internet (i.e., tablets, computadoras,... o lo que sea que pueda acceder a una página Web).
Para comunicarse con la máquina principal, estos clientes usan programas diseñados para establecer comunicación entre ambos equipos, comúnmente estos programas son los navegadores web (ej., Safari, Chrome, Firefox). Estos programas están construidos para establecer comunicación con dichas máquinas principales.  
Todas las páginas que existen en el mundo son ejecutadas en distintas computadoras y para poder coordinar la manera en que se coordinan estas computadoras con los millones de clientes fue necesario definir un protocolo (serie de reglas y pasos a realizar para establecer dicha comunicación) llamado HTTP.  

Visto de una forma más sencilla:  
Existe una computadora central que contiene todos los archivos y recursos de una página a la que queremos acceder. Además, muchos clientes se conectan a esta computadora a través (pero ojo, no exclusivamente) de navegadores web usando el protocolo HTTP para comunicarse. 

Ahora bien, ¿cuál es el medio de comunicación (o canal) por el cual los clientes se comunican con la máquina central?  

Así es, el internet. El internet está compuesto de múltiples protocolos y capas de comunicación vía la red.

Pero entonces, ¿cuál es el camino que sigue la comunicación del cliente y el servidor?  
El cliente debe saber hacía que computadora debe dirigirse y dónde está ubicada. Para ello se usa la dirección IP (Internet Protocol), el cual nos dice dónde está la computadora o el router cel sitio web que queremos.  

Veamos un ejemplo:
<img width="682" alt="Captura de Pantalla 2021-01-09 a la(s) 14 35 50" src="https://user-images.githubusercontent.com/41757059/104108210-6b0d5d80-5288-11eb-9a0c-fb21ad3df42f.png">
_Notemos que entre los datos que estamos recibiendo como respuesta se encuentra la dirección IP del sitio  web._

## El DNS y su funcionamiento ##

El DNS (Domain Name System) es el encargado de empatar una URL con una dirección IP.

Ahora, revisemos su funcionamiento:

1.- El navegador recibe nuestra solicitud (i.e., un URL).  
2.- El navegador busca en el caché para saber si ya conoce la dirección IP de la URL (Estos registros se actualizan cada que visitamos un nuevo sitio web para no tener que hacer todo el recorrido de búsqueda cada vez que lo busquemos).  
3.- En caso de no recibirlo, le preguntará al S.O.  
4.- El S.O buscará si lo tiene en su caché.  
5.- En caso de que el S.O tampoco lo tenga entonces acudiremos al resolver el cual es nuestro proveedor de internet, al que normalmente llamamos ISP.  
6.- El ISP también tiene su propio caché y busca ahí si ya conoce la IP.  
7.- En caso de que nadie haya visitado antes esa página web, no lo encontrará y lo buscará en el root (solo existen 12 roots en el mundo).  
_Nota: La función obligatoria del resolver es saber donde está el root._  
_Nota: Los roots existentes son operados cada uno por cientos de servidores o computadoras distribuidos al rededor del mundo._  
8.- Los roots te enviarán con los TLD (Top Level Domain) algunos ejemplos son: ".com", ".edu", ".net"..., y el TLD te puede entregar los name servers que le corresponden a un sitio web (URL).  
_Nota: Los name servers le llegan a los TLD cuando se compra el dominio o dirección URL. Al registrar un dominio el propietario indica el name server, ellos son la última cadena de la búsqueda. Ellos te dirán la IP que corresponde al URL._  
9.- Finalmente, con la dirección ya sabes a qué computadora dirigirte para acceder a la página que querías.  

Para más información puedes acceder a [howdns.works](https://howdns.works/)

## Lenguaje de marcado ##

Cuando escribimos una página web hay muchos más elementos interactuando que solo el texto que se muestra y cada uno de estos elementos se puede presentar de una manera única y distinta.  
Pensando en esto se requiere de un documento para presentar los elementos que componen la página web y para ello, podemos usar un markup language. Estos "lenguajes" definen un código para poder dar formato a un documento de texto a modo que código de programación de una computadora pueda leer y entender cuáles son los elementos y cómo debe presentarlos.  
Estos lenguajes tienen reglas que les permite distinguir entre el texto del documento y las anotaciones que describe el documento mismo. A estas anotaciones les llamamos markout del texto (ej., HTML, XML).

* HTML es el tipo de lenguaje con el que se describen las páginas web.
* XML es particularmente popular en desarrollo móvil.
_Nota: Tanto en HTML como en XML el marcado se diferencia del texto por el uso de etiquetas (se distinguen pues rodean al nombre con: < >)._

Por ejemplo:
```
<p> Hola mundo </p>  
```
_Notemos que hay una etiqueta que abre y otra que cierra._

Las etiquetas sirven para entender el documento, por un lado definen la jerarquía de la página web a través de un árbol llamado DOC y también para entender semánticamente el documento.

## HTML ##

_HT_ viene de hipertext y _ML_ hace referencia a que es un lenguaje de marcado.  

Hipertext hace referencia a la base de la web y de html, los links (o hiperlinks). Por otro lado, al decir que es un lenguaje de marcado hacemos referencia al uso de etiquetas que describe el texto y los elementos que forman parte del documento HTML.  
_Nota: "hiper" indica que no existe un orden lineal para moverte a través de los links (puedes ir a cualquier página web en cualquier orden)._  

Podemos encontrar un listado de etiquetas en la siguiente página: [w3schools.com/TAgs/ref_byfunc.asp](https://www.w3schools.com/TAgs/ref_byfunc.asp)  

Las etiquetas se usan para definir elementos HTML, un elemento es el conjunto de la etiqueta que abre, la que cierra y todo lo que hay dentro de ambas etiquetas.

Por ejemplo:
```
<p> Hola mundo </p>  
```
Además, hay elementos que no tienen contenido. Estos se identifican por el uso de etiquetas que se cierran a sí mismas (self closing tags).

Por ejemplo:
```
< img />  
```
Otro aspecto interesante de un documento HTML es que un elemento puede contener a otros elementos dentro de sí mismo.

Por ejemplo:
```
<div>
 <p> Estoy dentro de un elemento div </p>
</div> 
```
## La historia de HTML en 2 minutos ##

Véase el siguiente video: [https://youtu.be/B5VjL2f1IQg](https://www.youtube.com/watch?v=B5VjL2f1IQg&feature=youtu.be&ab_channel=codigofacilito)

## CSS ##

Cuando escribimos una página web empezamos por la estructura y los elementos que la componen (recordemos que eso se hace con HTML) y después, viene la presentación de la misma (cosa que le corresponde a CSS).

_CONSEJO: Siempre separa el contenido de la presentación._

CSS son las siglas de Cascading Style Sheets.

La traducción de Cascading Style Sheets es "hojas de estilo en cascada".  
* La parte de las __hojas de estilo__ hace referencia a que estos documentos se encargan de definir la presentación y estilo de los elementos HTML a través de la modificación de las propiedades de estos elementos.  
Por ejemplo:
```
background_color: red; 
```
La propiedad para modificar el fondo es background por lo que si queremos tener el fondo rojo, deberíamos hacer lo anterior.

* La parte de cascada, es un poco más difícil de describir.
En términos generales hace referencia al cómo se elige que valor tendrá una propiedad de un elemento HTML. Este comportamiento está pensado en modificar un elemento dependiendo de múltiples criterios.  
Además, considera el uso de hojas de estilo predefinidas. Estas hojas nos ayudan a empezar el diseño de nuestras páginas web.  
_Nota: En el concepto de cascada existe el orden de precedencia._
