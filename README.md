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

# Primeros pasos en desarrollo Web #

## Archivos HTML ##

Los documentos base que enviamos al navegador para desplegar nuestra página web son archivos con la extensión HTML mismos que contienen las etiquetas con los elementos que componen nuestra página web.

Los archivos HTML que vayamos creando pueden ser nombrados como queramos pero siempre deben llevar la terminación ".html". Además por convención es nombramos a la página principal o de bienvenida "index.html". La intención es que este archivo sirva como el índice de tu página desde el cual puedes ir hacía otras páginas más.

## Editores en línea ##

En internet existen un sinfín de editores interactivos de html por ejemplo [CODEPEN](https://codepen.io/)), ahí puedes crear proyectos con HTML, CSS, JS pero también explorar el trabajo de otras personas.  
También existe [JS Bin](https://jsbin.com/?html,output) pero está más especializado en JavaScript.  

## Especificar el tipo de documento ##
```
<!DOCTYPE html> 
```
Está será nuestra primera línea de código en todos nuestros archivos HTML. No es una etiqueta (por eso no hay un cierre en la declaración), es una declaración de que versión de HTML usaremos en el documento (en este caso HTML 5). Está declaración le sirve al navegador para saber cómo leer y desplegar el documento HTML.

## Elementos básicos de una página ##

Veamos la estructura básica de cualquier página que crearemos más adelante.
```
<!DOCTYPE html> 

<html> 
    <head>
        <title>Título</title>
        <meta charset="utf-8">
    </head>
    <body></body>
</html>
```

_Nota : Todas estas etiquetas (salvo que se indique lo contrario) sólo deben colocarse una vez (i.e., no puede repetirse) durante el documento._

Etiqueta            | Descripción
------------------- | -------------
`<!DOCTYPE html>`   | Define el tipo de documento.
`<html>`            | Raíz del documento.
`<head>`            | Contiene metadatos (i.e., datos que describen otros datos) / información del documento. _Nota: No es visible en nuestra página, solo la describen._ 
`<title>`           | Define un título para el documento.
`<meta>`            | Define metadatos sobre un documento HTML (para crear páginas en español usamos el siguiente conjunto de caracteres: "utf-8"). _Nota: Esta etiqueta sí se repite._
`<body>`            | Contiene todo lo que es visible en la página.


## Metadatos ##

Llamamos metadatos a los que describen a otros datos.  
Un metadato NO es la información central, es la información añadida sobre la información central.  
Es importante usarlos correctamente para mejorar la visibilidad del sitio web.
Su etiqueta es la siguiente: `<meta>`.  
La estructura que siguen la mayoría de los metadatos (que definimos con la etiqueta anterior) es la siguiente:  
<meta name="description" content="">   
Tienen un nombre que se asigna en el atributo **name** y un valor que se asigna en el atributo **content**.  
Otros metadatos importantes son los de el protocolo open graph (este protocolo define los nombres que llevan los metadatos y que valor se le asigna a cada uno de ellos), además este protocolo es usado por redes sociales para mostrarte previews.  
Ahora veamos algunas etiquetas que forman parte del protocolo open graph (op):  
```
    <meta name="og:title" content="CV de Ariana Fernández"> <!-- Título que aparece en la vista previa del link. -->
    <meta name="og:description" content="Ariana es actualmente estudiante de la carrera de Ciencias de la Computación
    en la Facultad de Ciencias de la UNAM."> <!-- Descripción que aparece abajo del título. -->
    <meta name="og:url" content="http://ariana.me"> <!-- Dirección a la cual debe de direccionar el link -->
    <meta name="og:site_name" content="Proyectos personales Ariana"> <!-- Nombre del sitio. -->
    <meta name="og:type" content="website"> <!-- Tipo de contenido que estamos compartiendo -->
    <meta name="og:image" content="<url-imagen>"> <!-- Imagen que aparece arriba de toda esta información. -->
```
## Atributos ##

Los atributos proporcionan información adicional sobre los elementos.
Todos los elementos HTML pueden tener atributos, algunos requieren de ciertos atributos para funcionar (como las etiqietas de metadatos).
Se describen con un nombre y un valor.
Por ejemplo:
```
    <body>
        <p nombre= "valor" ></p>
        <input autofocus>
    </body>
```  
El valor de un atributo se coloca entre comillas pues se acostumbre.
El nombre se separa del valor por medio de un =.
El atributo autofocus se conoce como un booleano.
Como cualquier valor que asignemos a un atributo los hace verdaderos estos pueden no tener valor, solo por estar ya será verdadero.

## Cómo se ve nuestro primer proyecto ##

Haremos un CV.  
Tendremos:
Un encabezado  
Una imagen  
Listas  
Entre otras cosas.

## Encabezado de nuestra página ##

_Nota : Todas estas etiquetas no pueden repetirse durante el documento._  
Etiqueta            | Descripción
------------------- | -------------
`<header>`          | Especificar encabezados de una página web.
`<p>`               | Etiqueta para colocar párrafos.
`<div>`             | Agrupa elementos. Buscamos agruparlos para cuando modificamos las propiedades en CSS podamos limitar las modificaciones a ese grupo. También lo usamos para crear elementos cuyo único proposito sea recibir propiedades CSS.

## El atributo style ##
Se puede aplicar a todos los elementos que se ven visualmente en la pantalla.  
Se pueden especificar propiedades CSS que modifiquen el cómo se presentan y se muestran los elementos en la página.  
_Nota: No es una buena práctica especificar las propiedades visuales de un elemento a través del atributo style._  

## Colores ##
Los colores se pueden expresar de distintas formas:   
* Por el nombre del color (ej. pink / white/ blue...)  
* Formato hexadecimal (ej. #464469)  
(Puedes encontrar muchos más poniendo color picker en google).  
* Formato RGB (ej. 70, 68, 105 )    
Los valores representan lo siguiente: (rojo, verde, azul).  
Ejemplos vistos: background-color, color, 

## Tipografía ##
Se refiere al diseño de las letras.  
Modificaciones que pueden hacerse: Tipo de fuente, tamaño, sombras, color, alineamiento, etc...  
Ejemplos vistos: font-family, text-align, font-weight , text-transform: uppercase,

## Títulos ##
Tienen el trabajo de describir los temas principales del sitio.  
Los títulos se especifican con las etiquetas h, ejemplo: `<h1>, <h2>, ...`
La palabra de mayor peso en el sitio web debe colocarse en un `<h1>`.
Es importante señalar que un documento usará únicamente una vez la etiqueta `<h1>` por documento.

## Espacios en blanco ##
Lugares donde NO hay elementos o contenido.
"Es lo que hace que el diseño de un sitio web, respire".
Ejemplos vistos: padding, 
_Nota: Al iniciar una página, esta puede venir con un margen por defecto. Para quitarselo podemos hacer: `margin: 0px;` _

## Listas ##
Tipos de listas que existen:
* Ordenadas  
<img width="703" alt="Captura de Pantalla 2021-02-07 a la(s) 21 55 33" src="https://user-images.githubusercontent.com/41757059/107174192-3677e900-698f-11eb-9d83-d303288af921.png">
Son ideales para: Rankings, Posiciones, Serie de pasos, etc...  

* Desordenadas  
Aquellas que no guardan un orden.
 <img width="703" alt="Captura de Pantalla 2021-02-07 a la(s) 22 00 07" src="https://user-images.githubusercontent.com/41757059/107174442-d9c8fe00-698f-11eb-9876-0ff520c800b7.png">
Son ideales para: Elementos sin orden, elementos en común, elementos que describen, etc...

* De definición  
<img width="703" alt="Captura de Pantalla 2021-02-07 a la(s) 22 02 02" src="https://user-images.githubusercontent.com/41757059/107174548-1dbc0300-6990-11eb-9074-c626d979d55b.png">
Son ideales para: Diccionarios, conceptos, puntos con explicaciones, etc...


## Links ##
Elementos que nos dirigen a nuevas partes de un sitio web o a otras páginas.  
Usaremos: `<a href= "¿a dónde vamos?"> </a>`  
Si queremos que lo abra en una nueva pestaña, usaremos target:   
`<a href= "¿a dónde vamos?" target="_blank"> </a>`  

## Imágenes ##
Usaremos la siguiente etiqueta:  
`<img src="">`  
La ruta debe ser _relativa_ (Relativas al lugar en el que está la página).  
En caso de querer agregar nuestra foto, usamos lo siguiente:
```
<div>
    <div style="display: inline-block; width:65%; vertical-align:top;">
        <h3 style="font-size: 35px;font-weight: bold; "> Education</h3>
        <div>
            <dl>
                <dt style="font-style: 25px; font-weight: bold; margin-bottom: 10px; margin-top: 30px;"> Facultad de Ciencias, Universidad Nacional Autónoma de México.</dt>
                <dd style="margin: 0px;"> Bachelor Degree in Computer Science. August, 2018 - Present. </dd>
                
            </dl>
        </div>
    </div>
    <div style="display: inline-block; width: 30%; margin-top: 25px;">
        <img src="img/Ariana.png" width="300">
    </div>
</div>
```

## Subir página a internet (gratis) ##
Existen muchas opciones para subir tu sitio web, usualmente tienen un costo.  
Los gastos son por el hosting y el dominio. El precio del hosting dependerá de la capacidad de almacenamiento y en el caso del dominio dependerá de qué tipo de dominio quieras (.com, .com.mx), etc...  
Para subir nuestro proyecto gratis a la web, usaremos GitHub Pages. Seguiremos los pasos encontrados en: 
[GitHub Pages](https://pages.github.com/)

# Concentrando el conocimiento #

## Cómo configurar un servidor web ##
Cuando hablamos de servidores web, podemos referirnos a dos cosas:
* A la computadora que aloja o almacena un sitio web
* Al programa que se encarga de procesar las peticiones de los clientes para poder enviarte a la página web.

En la siguiente [página](https://gist.github.com/willurd/5720255), podemos ver distintas formas en las que podemos ver distintas formas a través de las cuales podemos ejecutar un servidor web.

Nosotros, estaremos utilizando Node.js 
Node.js es un entorno de ejecución del lenguaje JavaScript.  
Lo primero será descargar Node.js y hacer la instalación en nuestra computadora.
Una vez instalado Node.js será muy sencillo iniciar un servidor web.  
Abriremos nuestra terminal y veremos si se instalo correctamente usando `node -v`, además verificaremos que npm también fue instalado de manera correcta usando `npm -v`. npm es un manejador de paquetes con el cual podemos instalar librerías que están hechas para este entorno de ejecución.  
El servidor web lo instalaremos usando el siguiente comando: `sudo npm install -g node-static`.  
Notemos que la libreria node-static quedo instalada:  
<img width="682" alt="Captura de Pantalla 2021-02-10 a la(s) 11 59 35" src="https://user-images.githubusercontent.com/41757059/107552222-c9d03a80-6b98-11eb-861d-0cb717d167a1.png">  
Ahora, iniciaremos nuestro propio servidor web (lo probaremos con nuestro CV).  
Por lo cual nos moveremos a la carpeta donde tenemos guardado nuestro proyecto.  
<img width="682" alt="Captura de Pantalla 2021-02-10 a la(s) 12 12 55" src="https://user-images.githubusercontent.com/41757059/107552592-53800800-6b99-11eb-8f0f-6ba67674984e.png">  
Posteriormente, usaremos el siguiente comando: `static -p 8000` y nos dirá en qué dirección se está ejecutando nuestro servidor.  
<img width="682" alt="Captura de Pantalla 2021-02-10 a la(s) 12 16 03" src="https://user-images.githubusercontent.com/41757059/107552950-c4bfbb00-6b99-11eb-8ef1-d86bd01049f0.png">
Y en nuestro navegador podremos poner `http://127.0.0.1:8000` o `localhost:8000` y tendrá que salirnos nuestra página.  
¡Y listo! Ya tenemos configurado nuestro servidor web que muestra la página creada para nuestro CV.

Nota: `static -p 8000` hará que tengamos nuestro servidor ejecutandose en la dirección `http://127.0.0.1:8000` o `localhost:8000`.

## Localhost y Puertos ##
Ya montamos nuestro servidor web local de desarrollo.
Para probarlo, en nuestro navegador usamos `localhost:8000`, 8000 fue el número que colocamos en el comando para iniciar el servidor mismo.  
Localhost se trata de un hostname, un hostname es una etiqueta o un nombre que se le asigna a un dispositivo dentro de la red. Por ejemplo si todas las computadoras están en el mismo wi-fi todos pertenecen a la misma red. Regresando al concepto de localhost este hostname es la etiqueta que se le asigna al dispositivo local, por lo que cuando colocamos localhost en la computadora, estamos conectandonos a la red interna de nuestra computadora que es la que está ejecutando el servidor web.
El puerto son puntos de entrada por los que se pueden comunicar las aplicaciones que están conectadas en red. Las computadores tienen hasta 65,535 puertos sobre los que se pueden colocar aplicaciones para comunicarse vía la red. Los que van del 0 al 1023 son los que se conocen como puertos del sistema, solo la computadora puede hacer uso de esos puertos. A partir del 1024 en adelante podemos usar los que queremos, aunque pueden haber algunos ocupados.
Para colocar servidores web, por convención se suelen utilizar los siguientes: 8000, 8080, 3000. 
En las páginas web sí nos comunicamos vía un puerto (aunque a este no lo ponemos explícitamente), se asume que el puerto es el 80. Es el que se aparta para el protocolo http (el que se usa para conectarse entre el navegador y el servidor web).  
Si la página usa conexión encriptada (cuando es segura) el puerto es el 443.  
Hasta este punto, hemos utilizado dos servidores: por una parte node.js y por otra github pages.

## Estructura de Archivos ##
Definiremos la estructura de organización de nuestros archivos.
Recordemos que la página inicial siempre se llamará index.html, después crearemos una carpeta llamada assets hace referencia a recursos o elementos que vamos a necesitar para el desarrollo del proyecto.

## Selectores CSS ##
Existen distintas formas en las que podemos alterar las propiedades CSS de un elemento. La primera de ellas es a través del atributo style de cada elemento. Además vimos los problemas que se presentaban con el uso de la propiedad style para definir la apariencia de nuestros elementos: repetimos código, hacemos que modificar el estilo sea más complejo y hay una dificultad para leer el código.  
Alternativo al atributo style, podemos escribir código css en archivos externos o dentro de una etiqueta especial de nombre style: `<style></style>` , usualmente se coloca en el head en nuestro documento HTML.  Aquí podemos definir propiedades para múltiples elementos de nuestro sitio web.  
El primer inconveniente al tratar de mover los estilos a un lugar separado del atributo style de los elementos está en que tenemos que definir que propiedades corresponden a que elemento de nuestra página web, para poder enlazar propiedades a un elemento CSS usamos selectores.  
Los selectores se verán de la siguiente forma:
```
    <style>
        selector{
            propiedad: valor;
        }
    </style>
```
La definición de selectores es muy amplia por lo que veremos los más comúnes, los de nombre, los de clase y los de ID.
Los de nombre son los más sencillos, colocamos el nombre de la etiqueta y el bloque de las propiedades. Estás propiedades se aplicarán a todos los elementos que pertenecen a esa etiqueta.  
Veamos un ejemplo de selectores de nombre:  
```
<!DOCTYPE html> 
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <!-- Selector de nombre. -->
        <style>
            p{
              color: red;  
            }
        </style>
    </head>
    <body>
        <p>
            Hola mundo.
        </p>
    </body>
</html>
```  
En un sitio web, no siempre queremos que todos los botones se vean igual, normalmente queremos que tengan distintas distintas propiedades entre grupos y en este caso entran los selectores de clase, y necesitaremos dos cosas:
1.- Asignarle una clase a algún elemento que queramos estilizar o modificar.
El nombre que colocaremos dentro de class es arbitrario. `<div class="arbitrario"></div>`.  
Es importante agregar que cada elemento de nuestro documento puede tener una o más clases. Por ejemplo: `<div class="arbitrario1 arbitrario2"></div>`. Las diferentes clases, como vemos en el ejemplo, se separan utilizando un espacio y se colocan dentro del mismo atributo class. No puede haber más de un atributo class por elemento.
2.- Para estilizarlos, especificamos propiedades dentro del bloque para esta clase.
Los selectores de clase se distinguen por tener un punto al inicio del nombre del selector, después sigue el nombre de la clase y por último el bloque correspondiente (los cuales pueden contener múltiples propiedades). Por ejemplo:
```
.arbitrario1 {
    height: 200px;
    weight: 100px;
    background-color: red;
}
```  

Por último, veremos los selectores de ID. El cual se asigna utilizando el atributo `<div id="arbitrario3"></div>`. La principal diferencia entre el selector por id y el de clase es que es único, no pueden ni deben haber dos elementos con el mismo id, mietras que una misma clase se puede asignar a los elementos que queramos, además un elemento solo puede tener un id, en las clases pueden definirse múltiples para un mismo elemento.  
Un selector de id en css, se escribira iniciando con un # seguido del id indicado, por ejemplo:  
```
#arbitrario3 {
    background-color: blue;
}
```  

## Selectores CSS ##  
Además de el uso de la etiqueta style, también podemos especificar propiedades de css utilizando archivos externos. Esta es la práctica recomendada. El archivo tendrá la extensión: `.css`. Para enlazar el documento con el HTML tenemos la etiqueta link:  `<link href="./assets/css/main.css" rel="stylesheet">`.
Para especificar la ruta utilizamos el atributo href, y para especificar la relación que existe entre el documento linkeado y el documento html, utilizamos el atributo rel. Para documentos css siempre el valor del atributo debe ser stylesheet.

## Normalizador CSS ##  
Los normalizadores son archivos que eliminan los valores por defecto de los elementos. Por eliminar, decimos que los valores asignados se sustituyen por otros que sean iguales en todos los clientes, los valores NO se definen aleatoriamente la comunidad ha estudiado cuales son los adecuados para normalizar los estilos a través de todos los clientes. Han creado archivos que podemos reciclar con los valores por defecto para nuestrto sitio web, una de las librerías populares para esto es [normalize](https://necolas.github.io/normalize.css/) que tiene como objetivo que todos los elementos se muestren de manera concistente.  
Ahora, para utilizar normalize, haremos lo siguiente:  
Damos click en el botón download.  
<img width="564" alt="Captura de Pantalla 2021-03-25 a la(s) 18 48 48" src="https://user-images.githubusercontent.com/41757059/112561544-119ed000-8d9b-11eb-86b9-a58e0fda1133.png">  
Posteriormente nos saldrá lo siguiente y tendremos dos opciones:  
La primera opción es importar el archivo usando la dirección en internet (copiando el url).
La segunda opción es descargarlo, moverlo a nuestro proyecto e importarlo localmente desde nuestra propia computadora.
La diferencia es que usando la primera opción requerirás de internet por lo que no podrás trabajar en el sitio a menos de que estes conectado a una red wi-fi, por otro lado el segundo enfoque no requiere de internet por lo que tu sitio web funcionaria en tu computadora aunque no estes conectado; usando esta segunda alternativa la página cargará ligeramente más lento.  
Si cuando desarrollamos tenemos acceso a internet es más recomendable la primera opción.
<img width="1240" alt="Captura de Pantalla 2021-03-25 a la(s) 18 52 36" src="https://user-images.githubusercontent.com/41757059/112561681-4c086d00-8d9b-11eb-9c6b-9a921171b2f1.png">
Por último y nos quedaremos con la primera opción ya que es la recomendable y solo bastará poner lo siguiente en nuestro archivo html para poder hacer uso de nuestro normalizador `<link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel="stylesheet">`. 
Es recomendable que para que casi todas las páginas que hagas coloques un normalizador de css.

## Semántica de las etiquetas ##  
¿Cómo sabemos cuándo elegir una etiqueta? ¿Por qué es importante usarlas adecuadamente?  
* Etiquetas con controles o widgets: Estas se usan para generar formularios, imágenes, links, audios o video. Tienen un uso perfectamente definido. Por ejemplo la etiqueta img, la etiqueta button, etc.
* Valor semántico para el sitio: Acarrean un valor semántico por lo que no queda claro cuando se tienen que usar. La semántica no afecta la apariencia de la página pero sí el significado. Por ejemplo section, h1, nav, article....
¿Para qué darle significado al sitio web? Existen dos tipos de usuario: las personas que pueden deducir el significado del sitio viendolo, por otra parte, están los programas de computadora los cuales también acceden a sitios web y no pueden entender la página porque no la pueden ver, la entieden leyendo las etiquetas y metadatos de nuestro sitio. Los programas que leen sitios web reciben distintos nombres dependiendo de con qué propocito ingresan a la página: crawlers,arañas, scrappers, etc.  Son escenciales para el funcionamiento del internet.


## Estructura del documento ##
Procederemos a definir la estructura de nuestro proyecto.
En nuestra página web estaremos definiendo un par de etiquetas `<div>`.
Notemos que uno de nuestros divisores contendrá toda la página, que es al cual le asignamos la clase container como vemos a continuación: 
` <div class="container"> </div>`.
Otro de nuestros divisores se encargará de centrar todo el contenido:
`<div class="content"> </div>`
Estaremos usando una etiqueta que describe un encabezado, que es `<header> </header>`.

## Tablas ##
No debes de definir la organización de nuestra página usando tablas, como se hacía antes.
Las tablas ya no se usan para el esquema de los sitios como se hacían antes. Ahora, tienen un propósito específico: organizar datos en forma de tabla. Usualmente la tabla se conforma de dos elementos: un cuerpo (celdas con datos a mostrar) y un encabezado (descriptores de columnas).  
Con ayuda de la etiqueta `<thead> </thead>`, haremos el encabezado de nuestra tabla, y con la etiqueta `<th> </th>` haremos los encabezados o descriptores de las columnas.
Por otra parte, con la ayuda de la etiqueta `<tbody> </tbody>` haremos el cuerpo de nuestra tabla. Ahora, es necesario recordar que las tablas así como están conformadas por columnas, también lo están por filas las cuales representan una nueva entrada (nuevo conjunto de datos) para la tabla.
Entonces, para declarar una nueva fila usaremos la etiqueta `<tr> </tr>`, y para declarar una celda se declaran con la etiqueta `<td> </td>`. Es necesario agregar que una celdas siempre debe estar contenida en una fila.  
El número de encabezados definidos debe concordar con el número de celdas que pongamos en cada fila. En caso de que queramos que una celda no tenga información, aún así la colocamos pero vacía, de esa forma de cuadra adecuadamente.  
Utilizando css haremos un borde (temporal) para nuestra tabla usando lo siguiente:  
```
td{
    border:solid 1px;
}
```  

## Iconos ##
Sirven para añadir información a la página a través de los gráficos o imágenes.
Para representar la calificación, utilizaremos estrellas.
Se podrían usar imágenes con fondo transparente, pero más de 6 iconos o imágenes podría hacer más lenta la página.
Implementaremos una tipografia que tiene iconos en lugar de letras.
A diferencia de imágenes los caracteres de una tipografia son vectores por lo cual se pueden hacer tan grandes como queramos sin dañar la calidad del gráfico.
Construir la tipografia te tomaría bastante trabajo pero hay proyectos existentes con iconos que son gratis.
Por ejemplo:
El conjunto de iconos de materialize que mantiene google o el que estaremos usando: Font Awesome:
[Font Awesome](https://fontawesome.com/)).
La manera en la que pude hacer uso de los iconos fue la siguiente:  
1.- Accederemos directamente al siguiente link: [Font Awesome Download](https://fontawesome.com/download))
2.- 
<img width="1266" alt="Captura de Pantalla 2021-04-05 a la(s) 20 06 52" src="https://user-images.githubusercontent.com/41757059/113644493-7df6ba80-964a-11eb-840b-17f81c555005.png"> Haremos click en " Looking for previous or other versions?"  
3.- En mi caso descargué la siguiente versión:  
<img width="1004" alt="Captura de Pantalla 2021-04-05 a la(s) 20 08 57" src="https://user-images.githubusercontent.com/41757059/113644615-c7dfa080-964a-11eb-84a7-9d14ab67074d.png">  
4.- Por último, haciendo uso de la etiqueta link, lo enlazamos a nuestro archivo .html `<link href="./fontawesome/web-fonts-with-css/css/fontawesome-all.min.css" rel="stylesheet">`.

Una vez hecho el enlace, para hacer uso de los iconos, nos vamos a la ventana iconos que está en la página, encontramos el que se acomode a nuestras necesidades y copiamos el html que nos permitirá hacer uso del icono.


## Organización de código ##
Si volvemos a abrir nuestro archivo de trabajo debería quedar claro que está sucediendo, de modo que las modificaciones puedan hacerse lo más rápido posible.
El código HTML, CSS, etc... debe cubrir con dos puntos principales: organizado y autodescriptivo. Para lo anterior puedes usar comentarios, identación, entre otras...

## Múltiples documentos HTML ##
Crearemos una carpeta donde pondremos nuestros nuevos documentos html.
Aquí colocaremos las páginas para cada uno de los elementos que pusimos en nuestras tablas.
Para poder ver la página, debemos hacer lo siguiente.
Por ejemplo...
localhost:8080/restaurantes/mafalda.html 

# CSS #

## Colores y fondos ##
Es importante saber que los colores son importantes para un buen diseño web, por eso, se suelen usar paletas de colores.
Algunas de las páginas donde podrás encontrar paletas de colores son las siguientes:
[https://material.io/](https://material.io/)
[https://www.materialpalette.com/](https://www.materialpalette.com/)
[https://flatuicolors.com/](https://flatuicolors.com/)
[https://color.adobe.com/es/create](https://color.adobe.com/es/create)
[https://coolors.co/](https://coolors.co/)

Una vez satisfecho con la colección de tus colores, en la hoja de estilos anotaremos en forma de comentarios los colores que tenemos, así los podemos tener como referencia.  
Ahora, es importante remarcar que también podemos usar degradados y tiene su propia sintaxis.
Página donde podrás encontrar degradados:
[https://uigradients.com/#CheerUpEmoKid](https://uigradients.com/#CheerUpEmoKid)
[https://webgradients.com/](https://webgradients.com/)

## Compatibilidad entre navegadores ##
Para que los degradados, sombras, animaciones se integren a un navegador se siguen una serie de pasos.
La "w3.org" detalla cómo debe funcionar esta novedad, propiedades y etiquetas nuevas de cómo se configurará.
Link:[https://www.w3.org/TR/css-images-3/](https://www.w3.org/TR/css-images-3/)
Cada navegador prioriza distintas funcionalidades de distinta manera, esto se traduce en que las funcionalidades más modernas pueden o no funcionar en distintos navegadores.
Estas complicaciones deben ser resueltas de manera que tu página utilice y aproveche la tecnologia más moderna sin comprometer la funcionalidad de la página para usuarios que utilicen navegadores más viejos o que no hayan implementado esa funcionalidad.
Para esto, los desarrolladores han diseñado e implementado distintas estretegias, por ejemplo: progressive enhancement.
Progressive Enhancement: En esta estretegia se prioriza el contenido, i.e., el proposito original de la páginas e pueda ver ignorando las novedades de la tecnologia, animaciones, colores, degradados, etc...
´´´
.container{
    background: #E2B4B7;/* Respaldp */
    background: -webkit-linear-gradient(to right, #d9a7c7, #fffcdc); 
    background: linear-gradient(to right, #d9a7c7, #fffcdc); 
}
´´´
Utilizando el respaldo, de alguna manera seguimos la estrategia antes mencionada.

La mayoría de los navegadores reconocen el degradado.

La mejora progresiva se ve reflejada en que primero colocamos un fondo sólido que cualquier navegador pudiera entender, y después los degradados. Para esto es importante recalcar que CSS está diseñado de tal forma en que si no entiende una propiedad, la ignora, es por eso que funciona.

Hacer una página que funcione para todos los usuarios implica tomar decisiones como: implica implementar algo muy nuevo o si vale la pena que tu sitio funcione en navegadores de hace 10 años.

Revisa que tu página funcione en:
Safari, firefox, chrome, edge, safari para ios, navegador de android, internet explorer (Versión 11).

Aunque podríamos probar nuestra página en los distintos navegadores antes mencionados también hay una herramienta que nos permite hacerlo: 
[https://caniuse.com/](https://caniuse.com/)
En esta página, se espefica el soporte de navegadores a las distintas funcionalidades que se pueden utilizar en un sitio web.


## Posicionamiento ##
Hay una gran cantidad de layouts y estructuras que podemos encontrar en la web además del enorme número de dispositivos con pantallas de distintos tamaños que acceden al internet todos los días, para cubrir estos millones de casos teníamos que tener una herramienta muy flexible, fácil de mantener, etc.
Antes se ordenaba todo con tablas, hasta la funcionalidades más modernas como css grid, etc.
Eventualmente, significó que existen muchas formas a tráves de las cuales podemos colocar un elemento en la posición que nosotros queramos, generalmente no hay una solución única y lo que nos queda es aprender las alternativas para decidir cuál se adapta mejor a nuestras alternativas.
Para centrar un elemento horizontal y verticalmente, haremos lo siguiente:
En caso de que queramos obtener el valor de toda la pantalla, podemos usar las unidades de medida en vh. Para el caso de height podemos usar 100vh para el alto total de la pantalla, por ejemplo 50vh sería la mitad.

Juego para aprender flexbox
[https://flexboxfroggy.com/#es](https://flexboxfroggy.com/#es)

## Fuentes personalizadas ##
La propiedad @font-face permite al autor especificar fuentes online para visualizar en sus páginas web. Para más información, podemos entrar al siguiente link: [https://developer.mozilla.org/es/docs/Web/CSS/@font-face](https://developer.mozilla.org/es/docs/Web/CSS/@font-face)
Podemos usar google fonts con la finalidad de encontrar distintos tipos de letras: [https://fonts.google.com/](https://fonts.google.com/)
Damos click en el estilo de letra que nos haya gustado, lo seleccionamos, vemos las familias que hemos seleccionado y copiamos el link y el nombre de la fuente en el archivo html y css, respectivamente.

## Modificadores de texto ##
Hay propiedades que afectan como se ve el texto en pantalla. Por ejemplo: text-decoration, text-transform, line-height, entre otros.

## Estilizar tablas ##
Pseudo-Clases: Se usan para definir propiedades para un elemento cuando se encuentra en un
estado en especifico, por ejemplo: cuando el mouse está encima del elemento, elemento activo, etc.
La pseudo-clase que utilizamos para el efecto que queriamos aplicar en este vídeo en particular se
llama "nth-child" esta pseudo-clase nos permite seleccionar vía un número o una fórmula a los hijos
de un padre.
Se define como sigue en css:
´´´
.table tr:nth-child(){
}
´´´

## Bordes y sombras ##
Hay distintas propiedades para bordes y sombras, un ejemplo de sombra realista puede ser el siguiente:
´´´
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
´´´
Para bordes, podemos revisar la siguiente página donde tenemos múltiples ejemplos:
[https://www.w3schools.com/css/css_border.asp](https://www.w3schools.com/css/css_border.asp)

## Shorthand Properties ##
Permiten especificar el valor de múltiples propiedades pero en una sola declaración, existen shorthand properties para muchos grupos de propiedades: los borders, los paddings, la tipografia, entre otros.
Estas propiedades pueden tener uno, dos o cuatro valores.
Para un padding o margenes, sería como sigue: 
padding: arriba derecha abajo izquierda 4
padding: arriba/abajo derecha/izquierda 2
padding: aplicable a todos los lados    1

## Especificidad en CSS ##
Al término que usamos para saber qué declaración debe aplicarse por sobre de otras a un elemento en css, se le llama especificidad. La especificidad es un peso que se le asigna a una declaración, entre mayor el peso más alta es la precedencia para que las propiedades se apliquen al elemento. La precedencia es el orden en qué el navegador decidirá que declaración aplicar.

![IMG_3932](https://user-images.githubusercontent.com/41757059/116766121-6bc03000-a9ee-11eb-84f5-36bf963980d0.jpg)

En el ejemplo anterior, la especificidad sería como sigue:
La de mayor peso es div.content, después .content y después aplicaría div.

Para definir la especificidad de una declaración se toman en cuenta múltiples argumentos, comencemos por los de orden jerárquico más alto.   
Los estilos declarados vía el atributo style tienen el peso más alto.
Si cambiaramos ` HTML: <div class = "content" style="background-color:pink;"></div>`, entonces el atributo style tendría mayor precedencia y se cambiaría el background a rosa.

La única forma en que un selector puede sobreecribir el atributo style es vía el uso de la regla important, esta regla se aplica cuando sobre la declaración de una propiedad se coloca la etiqueta `!important` al final, indicando que esta declaración debe sobreecribir a todas las demás. 

Aunque `!important` puede sacarte de algún apuro, es una mala práctica.
el orden jerárquico queda de la siguiente manera:
1.- `!important`
2.- Atributo style.

Ahora, volvamos al ejemplo principal.  
En lo que respecta a los selectores, la precedencia se define de la siguiente manera:  
1.- Selectores por id (peso más alto).  
2.- Selectores de clase, atributos y pseudo clases.  
3.- Selectores de tipo y pseudo elementos (peso más bajo).  


Ejemplo de selector por id:  

![IMG_97AF05069B0B-1](https://user-images.githubusercontent.com/41757059/118073834-49c19880-b372-11eb-8da3-670d033042c5.jpeg)

Ahora, es necesario saber que entre más especifico sea el selector tomará más peso.
Por ejemplo si tuvieramos ` CSS: #div.content {background-color: purple}`, este sería el de mayor peso.

## Posiciones (absolute, fixed, relative) en CSS ##

Una de las propiedades que nos permite alterar el lugar en el que aparece un elemento es con la propiedad position, misma que define como un elemento debera ser colocado o posicionado en la página web.

Position no define en donde aparecerá sino cómo las posiciones o dimensiones especificadas en top, right, left y button afectaran el lugar en el que se posicionará el elemento.

Los valores para position son los siguientes:
static, relative, absolute, fixed, sticky.

Todos los elementos cuando los creamos desde el inicio empiezan con el valor static en la propiedad position, se dice que estos elementos no estan posicionados, ya que su posicion no se altera en lo más minimo por los valores top, left, right y button.

El valor más simple es relative, pues modificará al elemento usando las propiedades indicadas tomando como origen la posicion en la que de por si se encuentra, este movimiento se hizo a partir de la posicion donde ya estaba.

Si asignamos como valor fixed, la posicion cambia por completo, las propiedades especificadas se añaden de manera relativa al viewport, es decir que no importa donde este originalmente el elemento, se colocara relativo a la pantalla, y además no se verá afectado por el scroll.

Si asignamos el valor como absolute, la posicion es relativa al contenedor más cercano al que este posicionado (No hay ningún div arriba de div cuyo positon sea diferente de static), si no hay, es relativo al viewport pero este sí se ve afectado por el scroll.

En caso de asignar el valor sticky, es un valor especial que intercambia los valores del elemento entre relative y fixed dependiendo de si el elemento se sale del viewport por el scroll.

## Animaciones ##

Las animaciones en css son faciles de definir, modificar y son eficientes.
Para crear una animación primero tenemos que especificar los keyframes. En una animación como esta únicamente definimos puntos clave de la animación o fotogramas clave, luego CSS se encarga de rellenar los fotogramas necesarios para pasar de uno a otro.

Para nuestro proyecto recurriremos a una libreria con animaciones predefinidas.
[https://animate.style/](https://animate.style/)

Pasos para agregar la animación:
![IMG_6DE99E7371CD-1](https://user-images.githubusercontent.com/41757059/118079677-3a484c80-b37e-11eb-8331-e0cc44fc96d7.jpeg)


## Detalles finales de estilo ##

Se uso padding para crear los espacios en blanco al rededor de los content, mejoró muchisimo la imagen de la página haciendola lucir más elegante.
