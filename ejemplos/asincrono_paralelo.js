"use strict";

console.log('empiezo');

//funcion que escribe un texto en la consola tras dos segundos
function escribeTras2Segundos(texto, callback){
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

// vamos a hacer un bucle
// con un bucle for (while, do, etc) hacemos que se ejecuten en parelelo

for (let i = 0; i < 5; i++){
    escribeTras2Segundos('texto' + i, function() {

    });
}