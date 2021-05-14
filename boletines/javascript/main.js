//DOM

/*
let links = document.querySelectorAll("a"); 

links.forEach(function(link){
    console.log(link);
})
*/

/*
let celdas = document.querySelectorAll("td"); 

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        //console.log("click"); Imprime 'click' por cada celda a la que damos click.
        //console.log(this); Imprime el elemento que disparó la ejecución de la función, que es el evento que recibió la interacción del usuario.

    })
})
*/

// 1.- Obtener elementos de la clase .close

let links = document.querySelectorAll(".close"); 

// 2.- Recorrer los elementos

links.forEach(function(link){
    // 3.-Agregar un evento click a cada uno de ellos
    link.addEventListener('click', function(evento){
        evento.preventDefault(); //Bloquea el comportamiento por defecto y evita que se ejecute.


        //Agarrar content 
        let content = document.querySelector('.content'); 

        //Quitarle clases de animación que ya tiene.
        content.classList.remove('animate__fadeInDown');
        content.classList.remove('animate__animated');

        //Agregar clases para animar su salida (fadeOutUp)
        content.classList.add('animate__fadeOutUp');
        content.classList.add('animate__animated');

        /* Nota:
         * Los archivos no se actualizaban en el localhost,
         * para solucionarlo se limpió el caché del navegador.
        */
        
        //Le pasamos una función y el intervalo de tiempo (después
        //de un segundo).
        setTimeout(function(){
            // o "/boletines"
            location.href = "/"; /* Redireccionamiento. */
        },600);


        return false;
    });
});




