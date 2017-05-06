"use strict";

console.log('empiezo');

//funcion que escribe un texto en la consola tras dos segundos
function escribeTras2Segundos(texto, callback){
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

// bucle asincrono en serie
// llamar a una funcion n veces en serie
function serie(n, fn, callbackFinalizacion){
    if (n == 0) {
        callbackFinalizacion();
        return;
    }
    n = n - 1; 
    fn('texto' + n, function() { // fn en este caso es escribeTras2Segundos
        serie(n, fn, callbackFinalizacion);
    });
}

// invocamos a la funcion ayudante
serie(5, escribeTras2Segundos, function() {
    // hemos terminado todas las iteraciones
    console.log('fin');
});