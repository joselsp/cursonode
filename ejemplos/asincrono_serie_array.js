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
// llamar a una funcion con cada elemento de un array
function serie(arr, fn, callbackFinalizacion){
    if (arr.length === 0) {
        callbackFinalizacion();
        return;
    }
    fn('texto' + arr.shift(), function() { // fn en este caso es escribeTras2Segundos
        serie(arr, fn, callbackFinalizacion);
    });
}

// invocamos a la funcion ayudante
serie([1,2,3,4,5], escribeTras2Segundos, function() {
    // hemos terminado todas las iteraciones
    console.log('fin');
});